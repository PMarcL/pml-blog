var contentHeight = 360;
var nbOfParticle = 15;
var particles = new Array();
var attractor;

function setup() {
  // For mobile perfomances.
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    nbOfParticle = 7;
  }

  var canvas = createCanvas(windowWidth, contentHeight);
  canvas.parent('header-sketch');

  attractor = new Attractor(width / 2, height / 2);

  for (var i = 0; i < nbOfParticle; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(253);

  for(var i = 0; i < nbOfParticle; i++) {
    particles[i].applyAttraction(attractor);
    particles[i].update();
  }

  for(var i = 0; i < nbOfParticle; i++) {
    for (var j = i; j < nbOfParticle; j++) {
      var distance = particles[i].getDist(particles[j]);
      if ( distance < 300) {
        stroke(map(distance, 0, 100, 0, 255));
        strokeWeight(1);
        line(particles[i].position.x, particles[i].position.y, particles[j].position.x, particles[j].position.y);
      }
    }
    particles[i].draw();
  }
}

function windowResized() {
    resizeCanvas(windowWidth, contentHeight);
    attractor.updatePosition(width / 2, height / 2);
}

// Constants for the Particle class.
var G = 50;
var MAX_VEL = 10;

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.add(p5.Vector.random2D().div(2));
    this.velocity.limit(MAX_VEL);
    this.acceleration.mult(0);
  }

  draw() {
    stroke(0);
    strokeWeight(5.0);
    point(this.position.x, this.position.y);
  }

  applyAttraction(attractor) {
    var force = attractor.getDirection(this.position);

    var distSquared = force.magSq();
    distSquared = constrain(distSquared, 0.1, 500);
    var strength = G * 5 / distSquared;
    force.setMag(strength);

    this.acceleration.add(force);
  }

  getDist(otherParticle) {
    return dist(this.position.x, this.position.y, otherParticle.position.x, otherParticle.position.y);
  }
}

class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
  }

  updatePosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  getDirection(position) {
    return p5.Vector.sub(this.position, position);
  }
}
