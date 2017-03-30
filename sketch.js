var tempo,
    pos,
    speed,
    moveRatio;

function setup() {
    tempo = 1;
    moveRatio = 9;

    pos = createVector(0, 0);
    speed = createVector(tempo * moveRatio, tempo);

    createCanvas(894, 272);
    background(128);
}

function draw() {
    stroke(255);
    strokeWeight(4);
    point(pos.x, pos.y);

    if(pos.x < width + 15) {
        pos.x += speed.x;
        moveRatio -= .045;
        speed.x = tempo * moveRatio;
    }

    if(pos.y < height + 15) {
        pos.y += speed.y;
    }

    if(pos.x < 0) {
        setup();
    }
}
