var SIZE = 20;

function initLogo(language) {
    var canvas = document.getElementById('logo');
    var logoBlocks = [];
    switch (language) {
        case "ru": {
            logoBlocks.push(
                // T
                {x: 2, y: 1, color: 'white'}, {x: 3, y: 1, color: 'white'}, {x: 4, y: 1, color: 'white'}, {x: 3, y: 2, color: 'white'},
                {x: 3, y: 3, color: 'white'}, {x: 3, y: 4, color: 'white'}, {x: 3, y: 5, color: 'white'},
                // Е
                {x: 6, y: 1, color: 'orange'}, {x: 7, y: 1, color: 'orange'}, {x: 8, y: 1, color: 'orange'}, {x: 6, y: 2, color: 'orange'},
                {x: 6, y: 3, color: 'orange'}, {x: 7, y: 3, color: 'orange'}, {x: 8, y: 3, color: 'orange'}, {x: 6, y: 4, color: 'orange'},
                {x: 6, y: 5, color: 'orange'}, {x: 7, y: 5, color: 'orange'}, {x: 8, y: 5, color: 'orange'},
                // Т
                {x: 10, y: 1, color: 'white'}, {x: 11, y: 1, color: 'white'}, {x: 12, y: 1, color: 'white'}, {x: 11, y: 2, color: 'white'},
                {x: 11, y: 3, color: 'white'}, {x: 11, y: 4, color: 'white'}, {x: 11, y: 5, color: 'white'},
                // Р
                {x: 14, y: 1, color: 'orange'}, {x: 15, y: 1, color: 'orange'}, {x: 16, y: 1, color: 'orange'}, {x: 14, y: 2, color: 'orange'},
                {x: 16, y: 2, color: 'orange'}, {x: 14, y: 3, color: 'orange'}, {x: 15, y: 3, color: 'orange'}, {x: 16, y: 3, color: 'orange'},
                {x: 14, y: 4, color: 'orange'}, {x: 14, y: 5, color: 'orange'},
                // И
                {x: 18, y: 1, color: 'white'}, {x: 18, y: 2, color: 'white'}, {x: 18, y: 3, color: 'white'}, {x: 18, y: 4, color: 'white'},
                {x: 18, y: 5, color: 'white'}, {x: 19, y: 4, color: 'white'}, {x: 20, y: 3, color: 'white'}, {x: 21, y: 1, color: 'white'},
                {x: 21, y: 2, color: 'white'}, {x: 21, y: 3, color: 'white'}, {x: 21, y: 4, color: 'white'}, {x: 21, y: 5, color: 'white'},
                // С
                {x: 23, y: 1, color: 'orange'}, {x: 24, y: 1, color: 'orange'}, {x: 25, y: 1, color: 'orange'}, {x: 23, y: 2, color: 'orange'},
                {x: 23, y: 3, color: 'orange'}, {x: 23, y: 4, color: 'orange'}, {x: 23, y: 5, color: 'orange'}, {x: 24, y: 5, color: 'orange'},
                {x: 25, y: 5, color: 'orange'},
                // .
                {x: 27, y: 5, color: 'white'}
            );
        } break;
        case "en": {
            logoBlocks.push(
                // T
                {x: 2, y: 1, color: 'white'}, {x: 3, y: 1, color: 'white'}, {x: 4, y: 1, color: 'white'}, {x: 3, y: 2, color: 'white'},
                {x: 3, y: 3, color: 'white'}, {x: 3, y: 4, color: 'white'}, {x: 3, y: 5, color: 'white'},
                // E
                {x: 6, y: 1, color: 'orange'}, {x: 7, y: 1, color: 'orange'}, {x: 8, y: 1, color: 'orange'}, {x: 6, y: 2, color: 'orange'},
                {x: 6, y: 3, color: 'orange'}, {x: 7, y: 3, color: 'orange'}, {x: 8, y: 3, color: 'orange'}, {x: 6, y: 4, color: 'orange'},
                {x: 6, y: 5, color: 'orange'}, {x: 7, y: 5, color: 'orange'}, {x: 8, y: 5, color: 'orange'},
                // T
                {x: 10, y: 1, color: 'white'}, {x: 11, y: 1, color: 'white'}, {x: 12, y: 1, color: 'white'}, {x: 11, y: 2, color: 'white'},
                {x: 11, y: 3, color: 'white'}, {x: 11, y: 4, color: 'white'}, {x: 11, y: 5, color: 'white'},
                // R
                {x: 14, y: 1, color: 'orange'}, {x: 15, y: 1, color: 'orange'}, {x: 16, y: 1, color: 'orange'}, {x: 14, y: 2, color: 'orange'},
                {x: 16, y: 2, color: 'orange'}, {x: 14, y: 3, color: 'orange'}, {x: 15, y: 3, color: 'orange'}, {x: 16, y: 3, color: 'orange'},
                {x: 14, y: 4, color: 'orange'}, {x: 14, y: 5, color: 'orange'}, {x: 15, y: 4, color: 'orange'}, {x: 16, y: 5, color: 'orange'},
                // I
                {x: 19, y: 1, color: 'white'}, {x: 19, y: 2, color: 'white'}, {x: 19, y: 3, color: 'white'}, {x: 19, y: 4, color: 'white'},
                {x: 19, y: 5, color: 'white'},
                // S
                {x: 21, y: 1, color: 'orange'}, {x: 22, y: 1, color: 'orange'}, {x: 23, y: 1, color: 'orange'}, {x: 21, y: 2, color: 'orange'},
                {x: 21, y: 3, color: 'orange'}, {x: 23, y: 4, color: 'orange'}, {x: 21, y: 5, color: 'orange'}, {x: 22, y: 5, color: 'orange'},
                {x: 23, y: 5, color: 'orange'}, {x: 23, y: 3, color: 'orange'}, {x: 22, y: 3, color: 'orange'},
                // .
                {x: 25, y: 5, color: 'white'}
            );
        } break;
        default: {

        } break;
    }
    canvas.width = 30 * SIZE;
    canvas.height = 8 * SIZE;
    var ctx = canvas.getContext('2d');
    if (ctx) {
        setInterval(function () {
         //   ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "darkorchid";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
           /* for (var i = 0; i < 30; i++) {
                for (var j = 0; j < 8; j++) {
                    ctx.fillStyle = "indigo";
                    ctx.fillRect(i * SIZE + 1, j * SIZE + 1, SIZE - 2, SIZE - 2);
                }
            }*/
            for (var i = 0; i < logoBlocks.length; i++) {
                var block = logoBlocks[i];
                ctx.fillStyle = block.color;
                ctx.fillRect(block.x * SIZE + 1, block.y * SIZE + 1, SIZE - 2, SIZE - 2);
                randomColor = randomizeColor();
                block.color = randomColor;
            }
        }, 500);
    }
}

function randomizeColor() {
   // return "#"+((1<<24)*Math.random()|0).toString(16);
    var i = getRandomInt(0, 1);
    switch (i) {
        case 0: return "orange";
        case 1: return "white";
        default: return "black";
    }
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}