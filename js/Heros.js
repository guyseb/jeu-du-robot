class Heros extends Humanoide {
    constructor(){
        this.image=new Image();
        this.image.src="img/hero.png";
    }
    seDeplace(){
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
            }
        
        
    }
}