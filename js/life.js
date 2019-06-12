// Adapted from https://p5js.org/examples/simulate-game-of-life.html
let w;

let columns;
let rows;

let board;
let next;

let tempColor;
let toColor;
let fromColor;
let xRatio;
let yRatio;

let colorQuadrants = {
  xBottom: null,
  xTop: null,
  yBottom: null,
  yTop: null
}

function setColor(xRatio, yRatio) {
  tempColor = lerpColor(
    lerpColor(colorQuadrants.xBottom, colorQuadrants.xTop, xRatio),
    lerpColor(colorQuadrants.yBottom, colorQuadrants.yTop, yRatio),
    (xRatio + (1 - yRatio)) / 2
  )

  fromColor = color(tempColor.levels[0], tempColor.levels[1], tempColor.levels[2], 0);
  toColor = color(tempColor.levels[0], tempColor.levels[1], tempColor.levels[2]);
}

function setup() {
  colorQuadrants = {
    xBottom: color(255, 40, 80), // Red
    xTop: color(0, 180, 250), // Blue
    yBottom: color(65, 255, 85), // Green
    yTop: color(125, 110, 210) // Purple
  }

  setColor(0, 0);

  frameRate(15);
  createCanvas(window.innerWidth, window.innerHeight);
  w = 15;
  // Calculate columns and rows
  columns = floor(width / w);
  rows = floor(height / w);
  // Wacky way to make a 2D array in JS
  board = new Array(columns);
  for (let i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }
  // Going toColor use multiple 2D arrays and swap them
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
  background(255);
  generate();
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      if (board[i][j].activation == 0) fill(255);
      else fill(lerpColor(fromColor, toColor, board[i][j].activation));
      noStroke();
      rect(i * w, j * w, w, w);
    }
  }
}

function mouseMoved() {
  xRatio = mouseX / windowWidth;
  yRatio = mouseY / windowHeight;
  setColor(xRatio, yRatio);

  let x = Math.floor(mouseX / w);
  let y = Math.floor(mouseY / w);
  let boundedX = 0;
  let boundedY = 0;

  for (var i=-1; i<2; i++) {
    for (var j=-1; j<2; j++) {
      boundedX = Math.max(1, Math.min(x+i, columns - 2));
      boundedY = Math.max(1, Math.min(y+j, rows - 2));

      board[boundedX][boundedY] = { val: 1, activation: 1 };
    }
  }
}

// reset board when mouse is pressed
function mousePressed() {
  init();
}

// Fill board randomly
function init() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j] = { val: floor(random(2)), activation: 0 };
      next[i][j] = { val: 0, activation: 0 };
    }
  }
}

// The process of creating the new generation
function generate() {

  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j].val;
        }
      }

      board[x][y].activation = Math.max(0, board[x][y].activation - 0.05);

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y].val;
      // Rules of Life
      if ((board[x][y].val == 1) && (neighbors ==  2)) next[x][y] = { val: 1, activation: 1 }
      else if ((board[x][y].val == 1) && (neighbors <  2)) next[x][y] = { val: 0, activation: board[x][y].activation }           // Loneliness
      else if ((board[x][y].val == 1) && (neighbors >  3)) next[x][y] = { val: 0, activation: board[x][y].activation }           // Overpopulation
      else if ((board[x][y].val == 0) && (neighbors == 3)) next[x][y] = { val: 1, activation: 1 }           // Reproduction
      else                                                 next[x][y] = board[x][y]; // Stasis
    }
  }

  // Swap!
  let temp = board;
  board = next;
  next = temp;
}

