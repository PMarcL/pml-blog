var contentHeight = 100;
var hexRadius = 20;
var hexHeight = hexRadius * 2;
var vertOffset = hexHeight * 3 / 4;
var hexWidth = Math.sqrt(3) / 2 * hexHeight;

var currentVisibleHexIndex = 0;
var nbVisibleHex = 15;

function setup() {
  var canvas = createCanvas(windowWidth, contentHeight);
  canvas.parent('header-sketch');
  frameRate(30);
  colorMode(HSB);
}

function windowResized() {
  resizeCanvas(windowWidth, contentHeight);
}

function draw() {
  background(255);

  var numberOfHorizontalHex = floor(width / hexWidth * 2) + nbVisibleHex;

  var currentHorizontalOffset = 0;
  var verticalOffset = height / 2;
  for (var i = 0; i < numberOfHorizontalHex; i++) {
    var currentVerticalOffset = verticalOffset;

    if (i % 2 != 0) {
      currentVerticalOffset -= vertOffset;
    }

    var position = createVector(currentHorizontalOffset, currentVerticalOffset);

    var hue = map(i, 0, numberOfHorizontalHex, 0, 255);
    // color.x is the hue, color.y is the saturation and color.z is the brightness.
    var color = createVector(hue, 0, 255);
    var indexDistance = currentVisibleHexIndex - i;
    if (indexDistance > 0 && indexDistance <= nbVisibleHex) {
      // Here color.y is the saturation channel.
      color.y = map(indexDistance, 0, nbVisibleHex, 125, 0);
    }

    drawHex(position, hexRadius - 2, color);
    currentHorizontalOffset += hexWidth / 2;
  }

  currentVisibleHexIndex = (currentVisibleHexIndex + 1) % numberOfHorizontalHex;
}

function drawHex(position, radius, color) {
  var deltaAngle = TWO_PI / 6.0;
  var currentAngle = PI / 6.0;

  beginShape();
  fill(color.x, color.y, color.z);
  strokeWeight(0);
  for (var i = 0; i < 6; i++) {
    var x = position.x + radius * cos(currentAngle);
    var y = position.y + radius * sin(currentAngle);
    vertex(x, y);
    currentAngle += deltaAngle;
  }
  endShape(CLOSE);
}
