var contentHeight = 240;
var blob;

function setup() {
  var canvas = createCanvas(windowWidth, contentHeight);
  pixelDensity(1);
  canvas.parent('header-sketch');
  blob = new Blob(width / 2, height / 2, 120);
}

function windowResized() {
  resizeCanvas(windowWidth, contentHeight);
  blob = new Blob(width / 2, height / 2, 120);
}

function draw() {
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var d = dist(x, y, blob.position.x, blob.position.y);
      var col += 100 * blob.radius / d;
      var index = (x + y * width) * 4;
      pixels[index] = col;
      pixels[index + 1] = col;
      pixels[index + 2] = col;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();

  stroke(255);
  strokeWeight(1);
  for (var i = 0; i < 150; i++) {
    point(random(width), random(height));
  }
  noLoop();
}

class Blob {
  constructor(x, y, r) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.radius = r;
  }

  update() {
    this.position.add(this.velocity);

    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }

    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
  }

}
