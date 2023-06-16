const objectId = {
  bolinha: document.getElementById("bolinha"),
  startButton: document.getElementById("startButton"),

}

const objectBolinha = {
  moveX: 1.5,
  moveY: 1.5,
  directionX: 1,
  directionY: 1,

}

objectId.startButton.addEventListener('click', () => {
  objectId.bolinha.style.visibility = "visible";
  objectId.startButton.style.display = "none";

  update();
  
});

objectId.bolinha.addEventListener('click', () => {
  objectBolinha.directionX = Math.random() < 0.5 ? -1 : 1;
  objectBolinha.directionY = Math.random() < 0.5 ? -1 : 1;
  
});

window.addEventListener('keypress', (event) => {
  objectBolinha.moveX = event.key === 'r' ? 1.5 : objectBolinha.moveX;
  objectBolinha.moveY = event.key === 'r' ? 1.5 : objectBolinha.moveY;

  objectBolinha.moveX = event.key === 'c' ? 0 : objectBolinha.moveX;
  objectBolinha.moveY = event.key === 'c' ? 0 : objectBolinha.moveY;

});

function update(){
  const bolinhaStyle = getComputedStyle(objectId.bolinha);
  const bolinhaLeft = parseInt(bolinhaStyle.left);
  const bolinhaTop = parseInt(bolinhaStyle.top);

  if(bolinhaLeft + objectId.bolinha.offsetWidth > window.innerWidth || bolinhaLeft < 0){
    objectBolinha.directionX = -objectBolinha.directionX;
    objectBolinha.moveX += 0.5;
  
  }

  if(bolinhaTop + objectId.bolinha.offsetHeight > window.innerHeight || bolinhaTop < 0){
    objectBolinha.directionY = -objectBolinha.directionY;
    objectBolinha.moveY += 0.5;
  
  }

  objectId.bolinha.style.transform = `rotate(${objectBolinha.directionX * bolinhaLeft}deg)`;
  objectId.bolinha.style.left = `${bolinhaLeft + objectBolinha.directionX * objectBolinha.moveX}px`;
  objectId.bolinha.style.top = `${bolinhaTop + objectBolinha.directionY * objectBolinha.moveY}px`;

  requestAnimationFrame(update);

}
