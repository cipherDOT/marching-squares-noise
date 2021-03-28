# marching-squares-noise
the marching squares algorithm but with noise function and modified results


```
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
```

the above lines of code analizes the given point using the getState function.

```
// return the case of the point using getState() by treating the point variables like a 4-bit number
function getState(a, b, c, d) {
    return a * 8 + b * 4 + c * 2 + d * 1;
}
```

and it draws isolines with respect to the result of isolines by the following test cases, 

```
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
```

and it uses the noise function to produce normalized variation over a area.

![](mar_sqr%20teal%20wavy.png)
