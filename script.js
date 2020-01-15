var matrix = [];
var side = 15;
var n = 50;
var m = 60;
var allGr = []
var allGrEater = []
var predatorArr = []
var allAllEater = []
var daleksArr = []
function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(random(4));
        }
    }
    createCanvas(m * side, n * side);
    background('#acacac');
    frameRate(5);
    matrix[25][30] = 5;
    var dalek = new Dalek(30, 25, 5)
    daleksArr.push(dalek)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1)
                allGr.push(gr);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grE = new GrassEater(x, y, 2)
                allGrEater.push(grE);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                var grEE = new GrassEaterEater(x, y, 3)
                predatorArr.push(grEE);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                var aE = new AllEater(x, y, 4)
                allAllEater.push(aE);
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                rect(x * side, y * side, side, side);
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#42e");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in allGr) {
        allGr[i].mul()
    }
    for (var i in allGrEater) {
        allGrEater[i].move()
        allGrEater[i].eat()
        allGrEater[i].mul()
        allGrEater[i].die()
    }
    for (var i in predatorArr) {
        predatorArr[i].move()
        predatorArr[i].eat()
        predatorArr[i].mul()
        predatorArr[i].die()
    }
    for (var i in allAllEater) {
        allAllEater[i].move()
        allAllEater[i].eatGr()
        allAllEater[i].eatGrEater()
        allAllEater[i].mul()
        allAllEater[i].die()
    }
    for (var i in daleksArr) {
        if (daleksArr.length <=50) {
            setTimeout(() => {
                daleksArr[i].mul()
            }, 7500);
        }
        else {
            daleksArr[i].exterminate();
        }
    }
}