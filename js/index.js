const splashScreen = document.querySelector('.game-intro');
let bg;
let x = 220;
let y = 700 - 150;
let carWidth = 60;
let carHeight = 100;
let arrayOfObstacles = [];
let count = 0; 

/*
class car {
constructor(x, y, width, height){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
}

  drawCar(){ 
    image(car, this.x, this.y, this.carWidth, this.carHeight)
  }
}
*/

class obstacle {
  constructor(obX, obY, obWidth, obHeight){
  this.obX = obX;
  this.obY = obY;
  this.obWidth = obWidth;
  this.obHeight = obHeight;
  }

    drawObstacle() {
      fill('green');
      rect(this.obX, this.obY, this.obWidth, this.obHeight);
      //for(i= 0; i <= arrayOfObstacles.length; i++){
        this.obY = this.obY + 3;
        
        if(this.obY > 700 ){
          this.obY =- 100;
       // arrayOfObstacles.push(rect)
      }
       
  }
}

let obstacle1 = new obstacle(100, 100, 150, 40);
let obstacle2 = new obstacle(150, 400, 100, 30);
let obstacle3 = new obstacle(300, 220, 200, 30);


function preload(){
  bg = loadImage("../images/road.png");
  car = loadImage("../images/car.png")
}

function setup (){
  const canvas = createCanvas(500, 700);
  canvas.parent('game-board');
  //for (let y = 0; y < height; y += 20) {
  //  for (let x = 0; x < width; x += random('15, 0')) {
     // console.log(random)
    //  arrayOfObstacles.push(x, y);
  //  }
  }
  
//};

function draw (){
  background(bg)
  image(car, x, y, carWidth, carHeight)
  obstacle1.drawObstacle()
  obstacle2.drawObstacle()
  obstacle3.drawObstacle()
 // for (let i = 0; i < count; i += 2) {
  //  rect(arrayOfObstacles[i], arrayOfObstacles[i + 1], 5, 12);
//}
 // if (count < arrayOfObstacles.length) {
 //   count++;
  }
//};


function keyPressed(){
  if((keyIsPressed) && (keyCode === LEFT_ARROW) && !(x <= width - 420)) {
    x -= 50
  }
  if((keyIsPressed) && (keyCode === RIGHT_ARROW) && !(x >= 420)) {
    console.log(x)
    x += 50
  }
}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame (){
    splashScreen.style.display = 'none'
    };
};

  /*
class movableCar {

  moveX(number) {
    this.x += number;
  }
  moveY(number) {
    this.y += number;
  }
}
*/
