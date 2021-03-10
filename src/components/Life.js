import React from 'react';
import p5 from 'p5';
import styled from 'styled-components';

const BACKGROUND_SCALE = 1.4;

// Adapted from https://p5js.org/examples/simulate-game-of-life.html
const LifeP5 = (sketch) => {
  let w;

  let columns;
  let rows;

  let board;
  let next;

  let tempColor;
  let xRatio;
  let yRatio;

  const colorQuadrants = {
    xBottom: sketch.color(255, 40, 80), // Red
    xTop: sketch.color(0, 180, 250), // Blue
    yBottom: sketch.color(65, 255, 85), // Green
    yTop: sketch.color(125, 110, 210) // Purple
  }

  function getColorSpectrum(xRatio, yRatio) {
    tempColor = sketch.lerpColor(
      sketch.lerpColor(colorQuadrants.xBottom, colorQuadrants.xTop, xRatio),
      sketch.lerpColor(colorQuadrants.yBottom, colorQuadrants.yTop, yRatio),
      (xRatio + (1 - yRatio)) / 2
    )

    const fromColor = sketch.color(tempColor.levels[0], tempColor.levels[1], tempColor.levels[2], 0);
    const toColor = sketch.color(tempColor.levels[0], tempColor.levels[1], tempColor.levels[2]);

    return [fromColor, toColor];
  }

  // Fill board randomly
  function init() {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const [fromColor, toColor] = getColorSpectrum(i / columns, j / rows);
        board[i][j] = { val: Math.floor(sketch.random(2)), activation: 0, color: sketch.lerpColor(fromColor, toColor, 1) };
        next[i][j] = { val: 0, activation: 0, color: sketch.lerpColor(fromColor, toColor, 1) };
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
        if ((board[x][y].val === 1) && (neighbors ===  2)) next[x][y] = { val: 1, activation: 1, color: board[x][y].color }
        else if ((board[x][y].val === 1) && (neighbors <  2)) next[x][y] = { val: 0, activation: board[x][y].activation, color: board[x][y].color }           // Loneliness
        else if ((board[x][y].val === 1) && (neighbors >  3)) next[x][y] = { val: 0, activation: board[x][y].activation, color: board[x][y].color }           // Overpopulation
        else if ((board[x][y].val === 0) && (neighbors === 3)) next[x][y] = { val: 1, activation: 1, color: board[x][y].color }           // Reproduction
        else                                                 next[x][y] = board[x][y]; // Stasis
      }
    }

    // Swap!
    let temp = board;
    board = next;
    next = temp;
  }

  sketch.setup = () => {
    sketch.frameRate(10);
    sketch.createCanvas(window.innerWidth * BACKGROUND_SCALE, window.innerHeight * BACKGROUND_SCALE);
    w = 40;
    // Calculate columns and rows
    columns = Math.ceil(sketch.width / w);
    rows = Math.ceil(sketch.height / w);
    // Wacky way to make a 2D array in JS
    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows);
    }
    // Going toColor use multiple 2D arrays and swap them
    next = new Array(columns);
    for (let i = 0; i < columns; i++) {
      next[i] = new Array(rows);
    }

    init();
  }

  sketch.draw = () => {
    sketch.background(255);
    generate();
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        board[i][j].color.setAlpha(Math.floor(board[i][j].activation * 255))
        if (board[i][j].activation === 0) sketch.fill(255);
        else sketch.fill(board[i][j].color);

        sketch.noStroke();
        sketch.rect(i * w, j * w, w, w);
      }
    }
  }

  sketch.mouseMoved = () => {
    if (!sketch.mouseX || !sketch.mouseY) return;

    xRatio = sketch.mouseX / sketch.windowWidth;
    yRatio = sketch.mouseY / sketch.windowHeight;
    const [fromColor, toColor] = getColorSpectrum(xRatio, yRatio);

    let x = Math.floor(sketch.mouseX / w);
    let y = Math.floor(sketch.mouseY / w);
    let boundedX = 0;
    let boundedY = 0;

    for (var i=-1; i<2; i++) {
      for (var j=-1; j<2; j++) {
        boundedX = Math.max(1, Math.min(x+i, columns - 2));
        boundedY = Math.max(1, Math.min(y+j, rows - 2));

        board[boundedX][boundedY] = { val: 1, activation: 1, color: sketch.lerpColor(fromColor, toColor, 1) };
      }
    }
  }
}

const OFFSET_SCALE = 100 * ((1 - BACKGROUND_SCALE) / 2);
const BOARD_SCALE = BACKGROUND_SCALE * 100;

const BackgroundDiv = styled.div`
  position: fixed;
  z-index: -1;
  top: ${OFFSET_SCALE.toFixed(0)}vh;
  left: ${OFFSET_SCALE.toFixed(0)}vw;
  width: ${BOARD_SCALE}vw;
  height: ${BOARD_SCALE}vh;
  opacity: 0.2;
`;

export const Life = () => {
  const boardRef = React.useRef();

  React.useEffect(() => {
    const p5Instance = new p5(LifeP5, boardRef.current);
    const resetSketch = () => p5Instance.setup();

    window.addEventListener('resize', resetSketch, true);
    return () => window.removeEventListener('resize', resetSketch, true);
  }, []);

  return (
    <BackgroundDiv ref={boardRef} />
  )
}

