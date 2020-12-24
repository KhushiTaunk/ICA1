// The picture of the polluted world burning with fire balls
// The blinking border frame is an alert sign for human beings
// (generative artwork)

balls = []
let img;
let fireball;

function preload() {
  img = loadImage('bg1.jpg')                          //background Image
  fireball = loadImage('fireball.png')                //fireball Image
}

function setup() {
  img.resize(0, 500)

  createCanvas(img.width, img.height);
  img.loadPixels();

  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball();
  }
}


function draw() {
  // background(220);

  //POINTILLISM EFFECT IN THE BACKGROUND IMAGE
  for (let i = 0; i < 100; i++) {
    let x = random(0, width)
    let y = random(0, height);
    // let r = random(3,mouseX*0.05)

    let c = img.get(x, y)
    fill(c[0], c[1], c[2], 150)

    points(x, y, 8)
  }


  { //CREATING THE BORDER FRAME
    //fill(181, 121, 29)
    noStroke()

    rect(0, height - 15, width, 15);
    rect(0, 0, width, 15);
    rect(0, 0, 15, height);
    rect(width - 15, 0, 15, height)
  }
  
  //fireball
  for (let i = 0; i < 4; i++) {
    balls[i].move();
    balls[i].draw();
  }
}
// background image
function points(x, y, r) {

  let c = img.get(x, y)
  fill(c[0], c[1], c[2], 150)
  noStroke()
  ellipse(x, y, r)
}

// MAKING OF BOUNCING FIRE BALLS
class Ball {
  constructor() {

    this.x = random(60, width - 60);   // x position
    this.y = random(60, height - 60);  // y position
    this.r = 30;       //ball radius
    this.velX = random(2, 5)
    this.velY = random(2, 5);
    this.accx = random(0, 0.02)
    this.accy = random(0, 0.02)
  }

  move() {
    this.x += this.velX;
    this.y += this.velY;

    this.velX += this.accx;
    this.velY += this.accy;

    if (this.x < 15 || this.x > width - 45) {
      this.velX = -this.velX
    }

    if (this.y < 15 || this.y > height - 45) {
      this.velY = -this.velY
    }
  }

  draw() {
    image(fireball, this.x, this.y, this.r, this.r)
    //ellipse(this.x,this.y,this.r)
  }

}