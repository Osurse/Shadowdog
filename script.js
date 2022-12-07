window.addEventListener("load", function () {

    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext('2d');
    const CANVAS_HEIGHT = canvas.height = 600;
    const CANVAS_WIDTH = canvas.width = 600;
    const player = new Image();
    player.src = './assets/shadow_dog.png';
    player.slot = 'back';
    let teclas = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'];
    let x = 0;
    let timemove = 20;
    let frameX = 0;
    let maxframeX = 6;
    let frameY = 0;
    let frame = 0;
    let time = 0;
    let back = false;
    const spriteWidth = 575;
    const spriteHeight = 523;
    window.addEventListener("keydown", e => {
        let count = 0;
        teclas.forEach(element => {
            if (e.key.toLocaleLowerCase() == element) {
                frameY = count
                switch (count) {
                    case 0:
                        maxframeX = 6
                        break;
                    case 1:
                        maxframeX = 6
                        break;
                    case 2:
                        maxframeX = 6
                        break;
                    case 3:
                        maxframeX = 8
                        break;
                    case 4:
                        maxframeX = 10
                        break;
                    case 5:
                        maxframeX = 4
                        break;
                    case 6:
                        maxframeX = 6
                        break;
                    case 7:
                        maxframeX = 6
                        break;
                    case 8:
                        maxframeX = 11
                        break;
                    case 9:
                        maxframeX = 3
                        break;

                    default:
                        break;
                }
            }
            count++;
        });

    });
    window.addEventListener("keyup", e => {
        console.log(e);
    });
            ctx.fillStyle = this.color;
            ctx.shadowColor = "black";
            ctx.font = 15 + "px " + "Bangers";
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(player,
            frameX * spriteWidth, frameY * spriteHeight,
            spriteWidth, spriteHeight,
            0, 0, spriteWidth, spriteHeight);
        ctx.fillText("(a)en espera, (s)flotar, (d)caer, (f)correr, (g)jugar, (h)acostarse, (j)rodar, (k)morder, "
        + "(l)echarse, (ñ)reir" ,10,50);
        if (time == timemove) {
            frameX++;
            timemove += 20;
        }
        time+=4;
        if (x > 499) {
            back = true;
        }
        if (x == 0) {
            back = false;
        }
        if (back) {
            x--;
        } else {
            x++;
        }
        if (frameX < maxframeX) frame++;
        else frameX = 0
        requestAnimationFrame(animate);
    }
    animate(0);
});