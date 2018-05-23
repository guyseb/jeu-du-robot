class Mecanique{
    constructor(canvas){
        //création du plateau
        var plateau = new Plateau(1366,768);
        //création du Hero
        var hero = new Hero(this.img.src);
        //création du monstre
        var monstre = new monstre(this.img.src);
    }

        

}
