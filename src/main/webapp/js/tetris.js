var canvas = document.getElementById("tetris");
var scoreLabel = document.getElementById("scoreLabel");
var gameOver = document.getElementById("game_over");
var isGameOver = false;
var bufferedFigure = 0;
var WIDTH = 20;
var HEIGHT = 30;
const SIZE = 20;
const FRAMES = 24;
var START_X = Math.round(WIDTH / 2);
const START_Y = -4;

document.getElementsByTagName("body")[0].onkeydown = function (event) {
    if (event.keyCode == 37 && figure.canMoveLeft()) {
        figure.moveLeft();
    } else if (event.keyCode == 39 && figure.canMoveRight()) {
        figure.moveRight();
    } else if (event.keyCode == 40 && figure.canMoveDown()) {
        figure.moveDown();
    } else if (event.keyCode == 38 && figure.canRotate()) {
        figure.rotate();
    }
};

field = {
    bricks: []
};

field.draw = function (ctx) {
    for (var i = 0; i < field.bricks.length; i++) {
        var brick = field.bricks[i];
        ctx.fillStyle = brick.color;
        ctx.fillRect(brick.x * SIZE + 1, brick.y * SIZE + 1, SIZE - 2, SIZE - 2);
    }
};

field.addFigureToField = function (figure) {
    field.bricks = field.bricks.concat(figure.bricks);
};

figure = {
    bricks: [],
    type: 0,
    position: 0
};

figure.draw = function (ctx) {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        ctx.fillStyle = brick.color;
        ctx.fillRect(brick.x * SIZE + 1, brick.y * SIZE + 1, SIZE - 2, SIZE - 2);
    }
};

figure.moveLeft = function () {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        brick.x -=1;
    }
};

figure.canMoveLeft = function () {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        if (brick.x - 1 < 0) return;
        for (var j = 0; j < field.bricks.length; j++) {
            var fieldBrick = field.bricks[j];
            if (brick.x - 1 == fieldBrick.x && brick.y == fieldBrick.y) return false;
        }
    }
    return true;
};

figure.moveRight = function () {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        brick.x +=1;
    }
};

figure.canMoveRight = function () {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        if (brick.x + 1 >= WIDTH) return;
        for (var j = 0; j < field.bricks.length; j++) {
            var fieldBrick = field.bricks[j];
            if (brick.x + 1 == fieldBrick.x && brick.y == fieldBrick.y) return false;
        }
    }
    return true;
};

figure.moveDown = function () {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        brick.y +=1;
    }
};

figure.canMoveDown = function () {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        if (brick.y + 1 >= HEIGHT) return false;
        for (var j = 0; j < field.bricks.length; j++) {
            var fieldBrick = field.bricks[j];
            if (brick.y + 1 == fieldBrick.y && brick.x == fieldBrick.x) return false;
        }
    }
    return true;
};

figure.rotate = function () {
    switch (figure.type) {
        case 0: break;
        case 1: {
            switch (figure.position) {
                case 0: {
                    figure.bricks[2].x += 1;
                    figure.bricks[2].y -= 2;
                    figure.bricks[3].x += 1;
                    figure.bricks[3].y -= 2;
                    figure.position = 1;
                } break;
                case 1: {
                    figure.bricks[1].x += 1;
                    figure.bricks[3].x -= 1;
                    figure.bricks[3].y += 2;
                    figure.position = 2;
                } break;
                case 2: {
                    figure.bricks[0].y += 1;
                    figure.bricks[2].x += 1;
                    figure.bricks[3].x += 1;
                    figure.bricks[3].y -= 1;
                    figure.position = 3;
                } break;
                case 3: {
                    figure.bricks[0].y -= 1;
                    figure.bricks[1].x -= 1;
                    figure.bricks[2].x -= 2;
                    figure.bricks[2].y += 2;
                    figure.bricks[3].x -= 1;
                    figure.bricks[3].y += 1;
                    figure.position = 0;
                } break;
            }
        } break;
        case 2: {
            switch (figure.position) {
                case 0: {
                    figure.bricks[0].x += 2;
                    figure.bricks[3].y -= 2;
                    figure.position = 1;
                } break;
                case 1: {
                    figure.bricks[0].x -= 2;
                    figure.bricks[3].y += 2;
                    figure.position = 0;
                } break;
            }
        } break;
        case 3: {
            switch (figure.position) {
                case 0: {
                    figure.bricks[1].x += 1;
                    figure.bricks[1].y -= 1;
                    figure.bricks[2].x += 2;
                    figure.bricks[2].y -= 2;
                    figure.bricks[3].x += 3;
                    figure.bricks[3].y -= 3;
                    figure.position = 1;
                } break;
                case 1: {
                    figure.bricks[1].x -= 1;
                    figure.bricks[1].y += 1;
                    figure.bricks[2].x -= 2;
                    figure.bricks[2].y += 2;
                    figure.bricks[3].x -= 3;
                    figure.bricks[3].y += 3;
                    figure.position = 0;
                } break;
            }
        } break;
    }
};

figure.canRotate = function () {
    switch (figure.type) {
        case 0: return false;
        case 1: {
            switch (figure.position) {
                case 0: {
                    if (
                        (figure.bricks[2].x + 1>= WIDTH ||
                        figure.bricks[2].y - 2 >= HEIGHT) ||
                        (figure.bricks[3].x + 1 >= WIDTH ||
                        figure.bricks[3].y - 2 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[2].x + 1 == fieldBrick.x &&
                            figure.bricks[2].y - 2 == fieldBrick.y) ||
                            (figure.bricks[3].x + 1 == fieldBrick.x &&
                            figure.bricks[3].y - 2 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
                case 1: {
                    if (
                        (figure.bricks[1].x + 1 >= WIDTH ||
                        figure.bricks[1].y >= HEIGHT) ||
                        (figure.bricks[3].x - 1 >= WIDTH ||
                        figure.bricks[3].y + 2 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[1].x + 1 == fieldBrick.x &&
                            figure.bricks[1].y == fieldBrick.y) ||
                            (figure.bricks[3].x - 1 == fieldBrick.x &&
                            figure.bricks[3].y + 2 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
                case 2: {
                    if (
                        (figure.bricks[0].x >= WIDTH ||
                        figure.bricks[0].y + 1 >= HEIGHT) ||
                        (figure.bricks[2].x + 1 >= WIDTH ||
                        figure.bricks[2].y >= HEIGHT) ||
                        (figure.bricks[3].x + 1 >= WIDTH ||
                        figure.bricks[3].y - 1 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[0].x == fieldBrick.x &&
                            figure.bricks[0].y + 1 == fieldBrick.y) ||
                            (figure.bricks[2].x + 1 == fieldBrick.x &&
                            figure.bricks[2].y == fieldBrick.y) ||
                            (figure.bricks[3].x + 1 == fieldBrick.x &&
                            figure.bricks[3].y - 1 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
                case 3: {
                    if (
                        (figure.bricks[0].x >= WIDTH ||
                        figure.bricks[0].y - 1 >= HEIGHT) ||
                        (figure.bricks[1].x - 1 >= WIDTH ||
                        figure.bricks[1].y >= HEIGHT) ||
                        (figure.bricks[2].x - 2 >= WIDTH ||
                        figure.bricks[2].y + 2 >= HEIGHT) ||
                        (figure.bricks[3].x - 1 >= WIDTH ||
                        figure.bricks[3].y + 1 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[0].x == fieldBrick.x &&
                            figure.bricks[0].y - 1 == fieldBrick.y) ||
                            (figure.bricks[1].x - 1 == fieldBrick.x &&
                            figure.bricks[1].y == fieldBrick.y) ||
                            (figure.bricks[2].x - 2 == fieldBrick.x &&
                            figure.bricks[2].y + 2 == fieldBrick.y) ||
                            (figure.bricks[3].x - 1 == fieldBrick.x &&
                            figure.bricks[3].y + 1 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
            }
        } break;
        case 2: {
            switch (figure.position) {
                case 0: {
                    if (
                        (figure.bricks[0].x + 2 >= WIDTH ||
                        figure.bricks[0].y >= HEIGHT) ||
                        (figure.bricks[3].x >= WIDTH ||
                        figure.bricks[3].y - 2 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[0].x + 2 == fieldBrick.x &&
                            figure.bricks[0].y == fieldBrick.y) ||
                            (figure.bricks[3].x == fieldBrick.x &&
                            figure.bricks[3].y - 2 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
                case 1: {
                    if (
                        (figure.bricks[0].x - 2 >= WIDTH ||
                        figure.bricks[0].y >= HEIGHT) ||
                        (figure.bricks[3].x >= WIDTH ||
                        figure.bricks[3].y + 2 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[0].x - 2 == fieldBrick.x &&
                            figure.bricks[0].y == fieldBrick.y) ||
                            (figure.bricks[3].x == fieldBrick.x &&
                            figure.bricks[3].y + 2 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
            }
        } break;
        case 3: {
            switch (figure.position) {
                case 0: {
                    if (
                        (figure.bricks[1].x + 1 >= WIDTH ||
                        figure.bricks[1].y - 1 >= HEIGHT) ||
                        (figure.bricks[2].x + 2 >= WIDTH ||
                        figure.bricks[2].y - 2 >= HEIGHT) ||
                        (figure.bricks[3].x + 3 >= WIDTH ||
                        figure.bricks[3].y - 3 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[1].x + 1 == fieldBrick.x &&
                            figure.bricks[1].y - 1 == fieldBrick.y) ||
                            (figure.bricks[2].x + 2 == fieldBrick.x &&
                            figure.bricks[2].y - 2 == fieldBrick.y) ||
                            (figure.bricks[3].x + 3 == fieldBrick.x &&
                            figure.bricks[3].y - 3 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
                case 1: {
                    if (
                        (figure.bricks[1].x - 1 >= WIDTH ||
                        figure.bricks[1].y + 1 >= HEIGHT) ||
                        (figure.bricks[2].x - 2 >= WIDTH ||
                        figure.bricks[2].y + 2 >= HEIGHT) ||
                        (figure.bricks[3].x - 3 >= WIDTH ||
                        figure.bricks[3].y + 3 >= HEIGHT)
                    ) return false;
                    for (var i = 0; i < field.bricks.length; i++) {
                        var fieldBrick = field.bricks[i];
                        if (
                            (figure.bricks[1].x - 1 == fieldBrick.x &&
                            figure.bricks[1].y + 1 == fieldBrick.y) ||
                            (figure.bricks[2].x - 2 == fieldBrick.x &&
                            figure.bricks[2].y + 2 == fieldBrick.y) ||
                            (figure.bricks[3].x - 3 == fieldBrick.x &&
                            figure.bricks[3].y + 3 == fieldBrick.y)
                        ) return false;
                    }
                } return true;
            }
        } break;
    }

};

figure.setColor = function (color) {
    for (var i = 0; i < figure.bricks.length; i++) {
        var brick = figure.bricks[i];
        brick.color = color;
    }
};

function checkFieldForScore() {
    for (var i = 0; i < HEIGHT; i++) {
        var counter = 0;
        for (j = 0; j < field.bricks.length; j++) {
            if (field.bricks[j].y == i) counter++;
        }
        if (counter >= WIDTH) {
            for (j = field.bricks.length - 1; j >= 0; j--) {
                if (field.bricks[j].y == i) field.bricks.splice(j, 1);
                else if (field.bricks[j].y < i) field.bricks[j].y += 1;
            }
            scoreLabel.innerText = parseInt(scoreLabel.innerText) + 10;
        }
    }
}

function checkGameOver() {
    for (var i = 0; i < figure.bricks.length; i++) {
        if (figure.bricks[i].y < 0) {
            isGameOver = true;
            submitScore();
            gameOver.style = 'visibility: visible';
        }
    }
}
function initTetris(size) {
    switch (size) {
        case 'small': {
            WIDTH = 15;
            HEIGHT = 15;
        } break;
        case 'medium': {
            WIDTH = 15;
            HEIGHT = 18;
        } break;
        case 'large': {
            WIDTH = 15;
            HEIGHT = 23;
        } break;
        default: {
            WIDTH = 15;
            HEIGHT = 20;
        } break;
    }
    START_X = Math.round(WIDTH / 2) - 1;
    newFigure();
    canvas.width = WIDTH * SIZE;
    canvas.height = HEIGHT * SIZE;
    var ctx = canvas.getContext('2d');
    if ( ctx ) {
        setInterval(function () {
            if (isGameOver) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "midnightblue";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < WIDTH; i++) {
                for (var j = 0; j < HEIGHT; j++) {
                    ctx.fillStyle = "indigo";
                    ctx.fillRect(i * SIZE + 1, j * SIZE + 1, SIZE - 2, SIZE - 2);
                }
            }
            field.draw(ctx);
            figure.draw(ctx);
        }, 1000 / FRAMES);

        setInterval(function () {
            if (isGameOver) return;
            if (figure.canMoveDown()) {
                figure.moveDown();
            } else {
                figure.setColor("green");
                field.addFigureToField(figure);
                checkGameOver();
                checkFieldForScore();
                newFigure();
            }
        }, 1000);
    }
}

function newFigure() {
    var selection = bufferedFigure;
    getRandomFigureNumber();
    switch (selection) {
        case 0: {
            figure.bricks = [
                    {x: START_X, y : START_Y, color: "red"},
                    {x: START_X + 1, y : START_Y, color: "red"},
                    {x: START_X, y : START_Y + 1, color: "red"},
                    {x: START_X + 1, y : START_Y + 1, color: "red"}
            ];
            figure.type = 0;
            figure.position = 0;
        } break;
        case 1: {
            figure.bricks = [
                {x: START_X, y : START_Y, color: "yellow"},
                {x: START_X, y : START_Y + 1, color: "yellow"},
                {x: START_X, y : START_Y + 2, color: "yellow"},
                {x: START_X + 1, y : START_Y + 2, color: "yellow"}
            ];
            figure.type = 1;
            figure.position = 0;
        } break;
        case 2: {
            figure.bricks = [
                {x: START_X, y : START_Y, color: "blue"},
                {x: START_X, y : START_Y + 1, color: "blue"},
                {x: START_X + 1, y : START_Y + 1, color: "blue"},
                {x: START_X + 1, y : START_Y + 2, color: "blue"}
            ];
            figure.type = 2;
            figure.position = 0;
        } break;
        case 3: {
            figure.bricks = [
                {x: START_X, y : START_Y, color: "pink"},
                {x: START_X, y : START_Y + 1, color: "pink"},
                {x: START_X, y : START_Y + 2, color: "pink"},
                {x: START_X, y : START_Y + 3, color: "pink"}
            ];
            figure.type = 3;
            figure.position = 0;
        } break;
    }
    figure.setColor(getRandomColor());
}

function getRandomArbitary(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

function getRandomFigureNumber() {
    var request = getXmlHttp();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                bufferedFigure = parseInt(request.responseText);
            } else {
                alert("Ошибка соединения");
            }
        }
    };
    request.open('GET', '/server/figure', false);
    request.send(null);
}

function submitScore() {
    var request = getXmlHttp();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
            } else {
                alert("Ошибка соединения");
            }
        }
    };
    request.open('GET', '/server/score?score=' + scoreLabel.innerText, false);
    request.send(null);
}

function getXmlHttp(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
