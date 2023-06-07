const objectId = {
  bolinha: document.getElementById("bolinha"),
  startButton: document.getElementById("startButton"),

};

const objectVar = {
  visibleBolinha: false,
  moveX: 1.5,
  moveY: 1.5,
  directionX: 0,
  directionY: 0,

};

objectId.startButton.addEventListener('click', function(event){
  if(event.button == 0){
    objectVar.visibleBolinha = true;

  }

});

objectId.bolinha.addEventListener('click', function(event){
  if(event.button == 0){
    objectVar.directionX = Math.ceil(Math.random()*((1+Math.sqrt(5))/2));
    objectVar.directionY = Math.ceil(Math.random()*((1+Math.sqrt(5))/2));
    
    if(Math.random() < 0.5){
      objectVar.directionX = -objectVar.directionX;
      objectVar.directionY = -objectVar.directionY;

    }
    
  }

});

function startBolinha(){
  if(objectVar.visibleBolinha === true){
    objectId.bolinha.style.visibility = "visible";
    objectId.startButton.style.visibility = "hidden";

  }

}

function barreira(){
  if(objectId.bolinha.style.left > window.innerWidth || objectId.bolinha.style.left < window.innerWidth){
    objectVar.directionX = -objectVar.directionX;

  }
  if(objectId.bolinha.style.top > window.innerHeight || objectId.bolinha.style.top > window.innerHeight){
    objectVar.directionY = -objectVar.directionY;

  }

}

function update(){

  barreira();

  objectVar.directionX = objectVar.moveX;
  objectVar.directionY = objectVar.moveY;

  objectId.bolinha.style.left = `${objectVar.directionX}px`;
  objectId.bolinha.style.top = `${objectVar.directionY}px`;

  requestAnimationFrame(update);

}

requestAnimationFrame(update);
