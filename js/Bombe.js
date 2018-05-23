class Bombe {
    constructor(){
        this.image=new Image();
        this.image.src="img/bomb.png";
        this.positionX;
        this.positionY;


    }
    explose(){

    }
    positionne(){
        this.positionX= Math.floor(Math.random()*window.innerWidth );
        // +32px-64px
        this.positionY= Math.floor(Math.random()*window.innerHeight);
    }
}
