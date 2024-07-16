export const sketch1 = (p5) => {
    let grainImg;
    let circles = [];
    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
        p5.noStroke()
        p5.noLoop()

        // generate the grain image (intensity between 0 and 255)
        grainImg = createGrainImage(20)

        createCircles();
    };

    p5.draw = () => {
        p5.background(255);

        // random circles
        for (let i = 0; i < circles.length; i++) {
            p5.fill(circles[i].r, circles[i].g, circles[i].b);
            p5.circle(circles[i].x, circles[i].y , circles[i].width);
        }

        // apply blur to canvas
        p5.filter(p5.BLUR, 70)

        // change the blend mode. You can try OVERLAY, HARD-LIGHT or SOFT-LIGHT
        p5.blendMode(p5.OVERLAY)

        // apply the grain image
        p5.image(grainImg, 0, 0, p5.width, p5.height);
    };

    function createCircles() {
        for (let i = 0; i < 100; i++) {
            circles.push({
                r: p5.random(255),
                g: p5.random(255),
                b: p5.random(255),
                a: p5.random(255),
                x: p5.random(p5.width),
                y: p5.random(p5.height),
                width: p5.random(0.3, 0.7) * p5.width
            })
        }
    }

    function createGrainImage(n = 30) {
        let pd = p5.pixelDensity()
        let img = p5.createImage(p5.width * pd, p5.height * pd)
        img.loadPixels()
        let p = img.pixels
        for (let i = 0; i < p.length; i += 4) {
            let v = 127 + p5.round(p5.random(-n / 2, n / 2))
            p[i] = v
            p[i + 1] = v
            p[i + 2] = v
            p[i + 3] = 255
        }
        img.updatePixels()
        return img
    }
};
