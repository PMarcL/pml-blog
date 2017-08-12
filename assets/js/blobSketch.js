var contentHeight = 210;
var nbOfVertices = 100;
var zOff = 0;
var noiseOffset = 200;

function setup() {
  var canvas = createCanvas(windowWidth, contentHeight);
  canvas.parent('header-sketch');
}

function windowResized() {
  resizeCanvas(windowWidth, contentHeight);
}

function draw() {
  background(253);

  var centerX = width / 2;
  var centerY = height / 2;

  var baseRadius = height / 2.0 - 20;

  fill(125, map(cos(frameCount/32), -1, 1, 0, 80), map(cos(frameCount/32), -1, 1, 0, 80));
  noStroke();
  beginShape();
  var deltaAngle = TWO_PI / nbOfVertices;
  var currentAngle = 0;
  for (var i = 0; i < nbOfVertices; i++) {
    var currentRadius = map(noise(noiseOffset + cos(currentAngle), noiseOffset + sin(currentAngle), zOff),
      0, 1, baseRadius - 50, baseRadius);
    var x = centerX + currentRadius * cos(currentAngle);
    var y = centerY + currentRadius * sin(currentAngle);
    vertex(x, y);
    currentAngle += deltaAngle;
  }
  endShape(CLOSE);

  zOff += 0.005;
}
