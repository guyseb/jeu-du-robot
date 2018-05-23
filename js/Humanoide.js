
class Humanoide{
    constructor(src, canvas, x, y) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.name = "hero.png";
        this.img = new Image();
        this.img.onload = () => {

            this.dessineMonHero();
            console.log("this >" + this.name, "parent >" + parent);
        };
        this.img.src = src;
    }

    dessineMonHero() {
        this.canvas.context.drawImage(this.img, this.x, this.y, 50, 50);
    }

    deplacement(e) {
        console.log(e.keyCode);
        this.canvas.context.clearRect(0, 0, this.canvas.l, this.canvas.h);

        switch (e.keyCode) {
            case 38:
                //haut
                this.y -= 10;
                break;
            case 39:
                //droit
                this.x += 10;
                break;
            case 37://gauche

                this.x -= 10;
                break;
            case 40:
                //bas
                this.y += 10;
        };
        this.dessineMonHero();


    }
}
