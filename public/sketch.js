function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    // canvas.parent('sketch');

    p5grain.setup();
}

function draw() {
    circle(width / 2, height / 2, 50);
}
