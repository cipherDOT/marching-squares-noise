


// marching squares algorithm that produces some intersting patterns. 
// using the built noise function to produce normalized change over area.
// subject to changes :)

// the space between two adjacent points
let rez = 10;

// constant to vary the noise values for each frame.
let c = 0.01;

// the two dimensional array to hold the values
let field = [];
let cols;
let rows;

// return the case of the point using getState() by treating the point variables like a 4-bit number
function getState(a, b, c, d) {
    return a * 8 + b * 4 + c * 2 + d * 1;
}

// modified drawline() function to draw line between two position vectors 
function drawline(a, b) {
    line(a[0], a[1], b[0], b[1]);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // cols and rows to get the length of the array.
    cols = width / rez;
    rows = height / rez;
}

function draw() {
    background(21);
    strokeWeight(4);
    for (let i = 0; i < cols; i++) {
        field[i] = [];
        for (let j = 0; j < rows; j++) {
            // the noise function to produce normalized change over area
            field[i][j] = round(noise(i * j * c));
        }
    }

    // the algorithm to draw the isolines between the points.
    for (let i = 0; i < cols - 1; i++) {
        for (let j = 0; j < rows - 1; j++) {
            let x = i * rez;
            let y = j * rez;
            let a = [x + rez * 0.5, y];
            let b = [x + rez, y + rez * 0.5];
            let c = [x + rez * 0.5, y + rez];
            let d = [x, y + rez * 0.5];
            let total = getState(
                field[i][j],
                field[i + 1][j],
                field[i + 1][j + 1],
                field[i][j + 1]
            );

            stroke(0, 90, 90);
            strokeWeight(2);

            if (total == 0) {
                null;
            } else if (total == 1) {
                drawline(c, d);
            } else if (total == 2) {
                drawline(b, c);
            } else if (total == 3) {
                drawline(b, d);
            } else if (total == 4) {
                drawline(a, b);
            } else if (total == 5) {
                drawline(d, a);
                drawline(b, c);
            } else if (total == 6) {
                drawline(a, c);
            } else if (total == 7) {
                drawline(d, a);
            } else if (total == 8) {
                drawline(d, a);
            } else if (total == 9) {
                drawline(a, c);
            } else if (total == 10) {
                drawline(a, b);
                drawline(c, d);
            } else if (total == 11) {
                drawline(a, b);
            } else if (total == 12) {
                drawline(b, d);
            } else if (total == 13) {
                drawline(b, c);
            } else if (total == 14) {
                drawline(c, d);
            } else if (total == 15) {
                null;
            }
        }
    }

    // changing the contant variable to vary the pattern
    c += 0.0001;
}
