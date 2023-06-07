// Get references to HTML elements
const objectId = {
  bolinha: document.getElementById("bolinha"),
  startButton: document.getElementById("startButton"),

};

// Object to store animation variables
const objectVar = {
  visibleBolinha: false,
  moveX: 1.5,
  moveY: 1.5,
  directionX: 1,
  directionY: 1,

};

// Event listener for the start button
objectId.startButton.addEventListener('click', function(event) {
  if (event.button === 0) {
    objectVar.visibleBolinha = true;
    startBolinha();

  }

});

// Event listener for the ball
objectId.bolinha.addEventListener('click', function(event) {
  if (event.button === 0) {
    objectVar.directionX = Math.ceil(Math.random() * ((1 + Math.sqrt(5)) / 2));
    objectVar.directionY = Math.ceil(Math.random() * ((1 + Math.sqrt(5)) / 2));

    if (Math.random() < 0.5) {
      objectVar.directionX = -objectVar.directionX;
      objectVar.directionY = -objectVar.directionY;

    }

  }

});

// Function to start the ball animation
function startBolinha() {
  if (objectVar.visibleBolinha === true) {
    objectId.bolinha.style.visibility = "visible";
    objectId.startButton.style.visibility = "hidden";
    update();
  
  }

}

// Function to handle ball collisions with window boundaries
function barreira() {
  const bolinhaStyle = getComputedStyle(objectId.bolinha);
  const bolinhaLeft = parseInt(bolinhaStyle.left);
  const bolinhaTop = parseInt(bolinhaStyle.top);
  const bolinhaWidth = parseInt(bolinhaStyle.width);
  const bolinhaHeight = parseInt(bolinhaStyle.height);
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (bolinhaLeft + bolinhaWidth > windowWidth || bolinhaLeft < 0) {
    objectVar.directionX = -objectVar.directionX;

  }

  if (bolinhaTop + bolinhaHeight > windowHeight || bolinhaTop < 0) {
    objectVar.directionY = -objectVar.directionY;

  }

}

// Function to update the ball position and handle collisions
function update() {
  barreira();

  const bolinhaStyle = getComputedStyle(objectId.bolinha);
  const bolinhaLeft = parseInt(bolinhaStyle.left);
  const bolinhaTop = parseInt(bolinhaStyle.top);
  const velocity = 1.618;
  const rotateAng = objectVar.directionX * bolinhaLeft;

  objectId.bolinha.style.transform = `rotate(${rotateAng}deg)`;
  objectId.bolinha.style.left = `${bolinhaLeft + objectVar.directionX * objectVar.moveX * velocity}px`;
  objectId.bolinha.style.top = `${bolinhaTop + objectVar.directionY * objectVar.moveY * velocity}px`;

  requestAnimationFrame(update);

}

// Start the animation
startBolinha();
