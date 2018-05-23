class Plateau {
    constructor(l,h){
        this.l= l;
        this.h= h;
        this.dessinePlateau();
        this.img= new Image();
        this.img.onload = () => {
            this.contexte2D.drawImage(this.img, 0, 0,this.l,this.h);

        }
        this.img.src= "img/CastleExample_3.png";
        this.musique= new Audio("media/fond_sonore.mp3");

    }
    joueMusique(mp3Url){

    }
    dessinePlateau(){
        this.canvas = document.createElement("canvas");
        this.contexte2D = this.canvas.getContext("2d");
        this.canvas.width = this.l;
        this.canvas.height = this.h;
        document.body.appendChild(this.canvas);
        console.log(this.contexte2D, this.canvas);
       
    }
}
