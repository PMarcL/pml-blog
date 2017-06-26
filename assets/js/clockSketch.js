var contentHeight = 310;
var clockRadius = 150;
var markerLength = 15;

function setup() {
  var canvas = createCanvas(windowWidth, contentHeight);
  canvas.parent('header-sketch');
  frameRate(2);
}

function windowResized() {
  resizeCanvas(windowWidth, contentHeight);
}

function draw() {
  background(253);

  var centerX = width / 2;
  var centerY = height / 2;

  // base clock drawing
  stroke(0);
  strokeWeight(2);
  ellipse(centerX, centerY, clockRadius * 2);
  strokeWeight(8);
  point(centerX, centerY);

  var deltaAngle = TWO_PI / 60;
  var currentAngle = 0;
  for (var i = 0; i < 60; i++) {
    if (i % 5 == 0) {
      strokeWeight(3);
      line(centerX + (clockRadius - markerLength) * cos(currentAngle), centerY + (clockRadius - markerLength) * sin(currentAngle),
        centerX + (clockRadius - 1) * cos(currentAngle), centerY + (clockRadius - 1) * sin(currentAngle));
    } else {
      strokeWeight(1);
      ellipse(centerX + (clockRadius - 4) * cos(currentAngle), centerY + (clockRadius - 4) * sin(currentAngle), 4);
    }
    currentAngle += deltaAngle;
  }

  // Get current time to draw the clock's handle.
  var d = new Date();
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours() % 12;

  // Minutes handle
  var minutesHandleAngle = minutes * deltaAngle - PI / 2 + deltaAngle / 60 * seconds;
  strokeWeight(3);
  stroke(0);
  line(centerX, centerY, centerX + (clockRadius - 10) * cos(minutesHandleAngle), centerY + (clockRadius - 10) * sin(minutesHandleAngle));
  line(centerX, centerY, centerX + -20 * cos(minutesHandleAngle), centerY + -20 * sin(minutesHandleAngle));

  // Hours handle
  var hoursHandleAngle = hours * TWO_PI / 12 - PI / 2 + TWO_PI / 720 * minutes;
  line(centerX, centerY, centerX + (clockRadius - 50) * cos(hoursHandleAngle), centerY + (clockRadius - 50) * sin(hoursHandleAngle));
  line(centerX, centerY, centerX + -20 * cos(hoursHandleAngle), centerY + -20 * sin(hoursHandleAngle));

  // Seconds handle, drawn last so that it appears above the other handles.
  var secondsHandleAngle = seconds * deltaAngle - PI / 2;
  strokeWeight(2);
  stroke(255, 0, 0);
  line(centerX, centerY, centerX + (clockRadius - 10) * cos(secondsHandleAngle), centerY + (clockRadius - 10) * sin(secondsHandleAngle));
  line(centerX, centerY, centerX + -20 * cos(secondsHandleAngle), centerY + -20 * sin(secondsHandleAngle));
}
