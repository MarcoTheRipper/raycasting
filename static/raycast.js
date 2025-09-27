let walls = [];
let boundaries = []
const RANDOMIZED_WALLS_MAX = 15;
let HEIGHT;
let WIDTH;
let source;

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    HEIGHT = windowHeight
    WIDTH = windowWidth
    let randomized_walls = random(RANDOMIZED_WALLS_MAX)
    for (let i = 0; i < randomized_walls; i++) {
        walls.push(new Wall(createVector(random(WIDTH), random(HEIGHT)), createVector(random(WIDTH), random(HEIGHT))));
    }
    //add outer boundaries
    boundaries.push(new Wall(createVector(0, 0), createVector(WIDTH, 0)))
    boundaries.push(new Wall(createVector(WIDTH, 0), createVector(WIDTH, HEIGHT)))
    boundaries.push(new Wall(createVector(WIDTH, HEIGHT), createVector(0, HEIGHT)))
    boundaries.push(new Wall(createVector(0, HEIGHT), createVector(0, 0)))

    source = new Source(createVector(HEIGHT / 2, WIDTH / 2))
}

function draw() {
    background(0);
    for (let wall of [...walls, ...boundaries]) {
        wall.draw()
    }
    source.cast([...walls, ...boundaries])
    source.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    HEIGHT = windowHeight
    WIDTH = windowWidth
    boundaries = []
    boundaries.push(new Wall(createVector(0, 0), createVector(WIDTH, 0)))
    boundaries.push(new Wall(createVector(WIDTH, 0), createVector(WIDTH, HEIGHT)))
    boundaries.push(new Wall(createVector(WIDTH, HEIGHT), createVector(0, HEIGHT)))
    boundaries.push(new Wall(createVector(0, HEIGHT), createVector(0, 0)))
}