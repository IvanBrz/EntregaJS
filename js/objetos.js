

/* function Oferta(nombreJuego, plataforma, precio, estado) {
    this.nombreJuego = nombreJuego;
    this.plataforma = plataforma;
    this.precio = precio;
    this.estado = estado;

    this.alerta = function() {
        alert(this.nombreJuego + " esta en oferta a un precio de " + this.precio);
    }
    this.multiplataforma = function() {
        if (this.plataforma === "PC, PS5") {
        return true;
    }   else {
        return false;
    }
    }
}
 */


class Offer{
    constructor(gameName, platform, price, status) {
        this.gameName = gameName;
        this.platform = platform;
        this.price = price;
        this.status = status;
    }
    isMultiplatform() {
        if (this.platform === "PC, PS5") {
            return true;
        }   else {
            return false;
        }
    }
}
let game1 = new Offer('Battlefield V', ['PC', 'PS5'], 9000, "En oferta");
let game2 = new Offer('Raft', 'PC', 5000, "En oferta");
let game3 = new Offer('Dirt 4', ['PC', 'PS5'], 8000, "En oferta");
let game4 = new Offer('War Thunder', 'PC', 2000, "En oferta");
let game5 = new Offer('Cyberpunk', 'PC', 4000, "En oferta");


let gameArray = [game1, game2, game3, game4, game5]

gameArray.forEach(element => console.log(element))

/* console.log(game1);
console.log(game2);
console.log(game3);
console.log(game4);
console.log(game5); */