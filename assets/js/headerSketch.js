var contentWidth = 800;
var contentHeight = 360;
var canvas;

function setup() {
  var canvasWidth = windowWidth >= contentWidth ? contentWidth : windowWidth;
  canvas = createCanvas(canvasWidth, contentHeight);
  canvas.parent('header-sketch');
}

function draw() {
  background(255, 0, 200);
}

function windowResized() {
  if (windowWidth < contentWidth) {
    resizeCanvas(windowWidth, contentHeight);
  }
}
