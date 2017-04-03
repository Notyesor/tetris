var canvas = document.getElementById("tetris");

const WIDTH = 30;
const HEIGHT = 8;
const SIZE = 20;
const FRAMES = 24;
const START_X = Math.round(WIDTH / 2);
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
    breaks: [],
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

function initTetris() {
    newFigure();
    canvas.width = WIDTH * SIZE;
    canvas.height = HEIGHT * SIZE;
    var ctx = canvas.getContext('2d');
    if ( ctx ) {
        setInterval(function () {
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
            if (figure.canMoveDown()) {
                figure.moveDown();
            } else {
                //figure.setColor("green");
                field.addFigureToField(figure);
                newFigure();
            }
        }, 1000);
    }
}

function newFigure() {
    var selection = getRandomArbitary(0, 3);
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
