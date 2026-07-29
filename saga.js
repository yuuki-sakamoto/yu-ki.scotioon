function setup() {
    let canvas = createCanvas(windowWidth, 150);
    canvas.parent('p5-footer');
    textAlign(CENTER, CENTER);
    colorMode(HSL, 360, 100, 100);
}

function draw() {
    clear(); 
    let h = (frameCount*2) % 360
    let s = 80;
    let l = 80;
    
    fill(h, s, l);
    noStroke();

    let tSize = 40 + sin(frameCount * 0.1)* 5;
    textSize(tSize);
    textStyle(BOLD);

    text("武 雄 T A K E O", width / 2, height / 2);
}

function windowResized() {
    resizeCanvas(windowWidth, 150);
}
