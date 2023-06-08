const bolinha = document.getElementById("bolinha");
const startButton = document.getElementById("startButton");

let moveX = 1.5;
let moveY = 1.5;
let directionX = 1;
let directionY = 1;


startButton.addEventListener('click', () => {
  bolinha.style.visibility = "visible";
  startButton.style.display = "none";
  
  update();
  
});

bolinha.addEventListener('click', () => {
  directionX = Math.random() < 0.5 ? -1 : 1;
  directionY = Math.random() < 0.5 ? -1 : 1;
  
});

function update(){
  const bolinhaStyle = getComputedStyle(bolinha);
  const bolinhaLeft = parseInt(bolinhaStyle.left);
  const bolinhaTop = parseInt(bolinhaStyle.top);

  if(bolinhaLeft + bolinha.offsetWidth > window.innerWidth || bolinhaLeft < 0){
    directionX = -directionX;
    moveX += 0.05;
  
  }

  if(bolinhaTop + bolinha.offsetHeight > window.innerHeight || bolinhaTop < 0){
    directionY = -directionY;
    moveY += 0.05;
  
  }

  bolinha.style.transform = `rotate(${directionX * bolinhaLeft}deg)`;
  bolinha.style.left = `${bolinhaLeft + directionX * moveX}px`;
  bolinha.style.top = `${bolinhaTop + directionY * moveY}px`;

  requestAnimationFrame(update);

}

update();
