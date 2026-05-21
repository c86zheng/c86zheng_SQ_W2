// ============================================================
// Week 2 Ex 1: Movement, Gravity, and Collision
// ============================================================

let sushibg
let sushi

function preload() {
  sushibgImg = loadImage("assets/images/sushibg.png");
  sushiImg = loadImage("assets/images/sushi.png");

}


let platforms = [
  // { x, y, w, h }
  { x: 0,   y: 385, w: 800, h: 40 }, 
  { x: 300, y: 160, w: 450, h: 5 },
  { x: 360, y: 278, w: 50, h: 10 }, 
  { x: 220, y: 290, w: 15, h: 16 }, 
  { x: 600, y: 287, w: 100, h: 10 }, 
  { x: 420, y: 54, w: 220, h: 10 },
];

let player = {
  x: 200, // horizontal position (centre of blob)
  y: 100, // vertical position (centre of blob)

  vx: 0, // horizontal velocity — how fast we're moving left/right
  vy: 0, // vertical velocity — how fast we're moving up/down

  r: 24, // radius of the blob shape

  // Movement tuning — change these to adjust how the game feels
  speed: 0.5,     // horizontal acceleration per frame
  maxSpeed: 4,    // maximum horizontal speed
  jumpForce: -12, // upward velocity applied when jumping (negative = upward)
  friction: 0.8,  // horizontal slowdown when no key is pressed (0–1, lower = more friction)

  onGround: false, // tracks whether the player is standing on something
};


const GRAVITY = 0.6; // downward force added to vy every frame


let blobT = 0; // time input for noise — increases each frame


function setup() {
  createCanvas(800, 450);
     // ground sits 40px from the bottom
  player.y = platforms[0].y - player.r; // start the player sitting on the floor
  
}


function draw() {
  image(sushibgImg, 0, 0, 800, 450);
  resolvePlatformCollisions();
  handleInput();
  applyPhysics();
  drawPlayer();
  drawHUD();

  blobT += 0.015; // advance blob wobble animation each frame
}



function handleInput() {
  // --- Horizontal movement ---
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // LEFT or A
    player.vx -= player.speed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // RIGHT or D
    player.vx += player.speed;
  }

  
  player.vx = constrain(player.vx, -player.maxSpeed, player.maxSpeed);

  
  if (
    !keyIsDown(LEFT_ARROW) &&
    !keyIsDown(65) &&
    !keyIsDown(RIGHT_ARROW) &&
    !keyIsDown(68)
  ) {
    player.vx *= player.friction;
  }

  
  if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && player.onGround) { // UP or W
    player.vy = player.jumpForce;
    player.onGround = false;
  }
}


function applyPhysics() {
 
  player.vy += GRAVITY;

 
  player.x += player.vx;
  player.y += player.vy;

  
  if (player.y + player.r >= platforms[0].y) {
    player.y = platforms[0].y - player.r; // snap to floor
    player.vy = 0;                // stop falling
    player.onGround = true;       // allow jumping again
  } else {
    player.onGround = false;
  }

  // 4. Wall collision — keep player inside canvas
  player.x = constrain(player.x, player.r, width - player.r);
}

function resolvePlatformCollisions() {
  for (let i = 0; i < platforms.length; i++) {
    let p = platforms[i];

    // Player's bounding box edges
    let playerLeft   = player.x - player.r;
    let playerRight  = player.x + player.r;
    let playerBottom = player.y + player.r;

    // Platform edges
    let platLeft  = p.x;
    let platRight = p.x + p.w;
    let platTop   = p.y;

    // 1. Check horizontal overlap
    let overlapsHorizontally = playerRight > platLeft && playerLeft < platRight;

    // 2 & 3. Check if landing on top (falling down onto the platform surface)
    // The small tolerance (+ 20) prevents the player clipping through
    // fast-moving platforms or getting stuck on edges.
    let landingOnTop =
      player.vy >= 0 &&
      playerBottom >= platTop &&
      playerBottom <= platTop + 20;

    if (overlapsHorizontally && landingOnTop) {
      player.y = platTop - player.r; // snap to platform surface
      player.vy = 0;                 // stop falling
      player.onGround = true;        // allow jumping again
    }
  }
}



function drawPlayer() {
  push(); // save current drawing settings

  // Teal fill, no outline
  fill(0, 200, 180);
  noStroke();

  image(sushiImg,player.x-40,player.y-40,80,80);

  // Draw two simple eyes
  fill(10);
  ellipse(player.x - 8, player.y - 6, 8, 8);
  ellipse(player.x + 8, player.y - 6, 8, 8);

  pop(); // restore drawing settings
}


function drawFloor() {
  fill(0,0,0,0); // dark teal
  noStroke();
  rect(0, platforms[0].y, width, height - platforms[0].y);
}


function drawHUD() {
  fill(230);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Move: Arrow Keys or WASD   Jump: W or Up Arrow", 16, 24);
}


function keyPressed() {
  
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}

