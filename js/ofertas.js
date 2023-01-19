

class Videogame{
    constructor(gameName, platform, price) {
        this.gameName = gameName;
        this.platform = platform;
        this.price = price;
    }
    isMultiplatform() {
        if (this.platform === "PC, PS5") {
            return true;
        }   else {
            return false;
        }
    }
    getFinalPrice(quotas) {

        let interest = {
            1: 1, //sin interes
            3: 1.3, //interes del 30%
            6: 1.5, //interes del 50%
        }  
        return this.price * interest[quotas];
    }
}

function addGames() {

    let text = "Ingrese el nombre de un juego en oferta, ingrese 0 para dejar de ingresar"
    let gameList = [];
    let gameName, price, platform = "";


    gameName = prompt(text);
    while (gameName !== "0") {
        price = Number(prompt("Ingrese el precio de " + gameName));
        platform = prompt("Ingrese la plataforma del juego " + gameName);
        gameList.push(new Videogame(gameName, platform, price))
        gameName = prompt(text);
    }

    return gameList;
}

function getQuotas() {
    let quotas = Number(prompt("Ingrese en cuantas cuotas va a pagar el juego: (1, 3 o 6)"));

    if (!(quotas === 1 || quotas === 3 || quotas === 6)) {
        alert("Ingrese un valor de cuotas valido (1, 3 o 6)");
        quotas = getQuotas();
    }

    return quotas;
}

function showGames(gameList) {
    let message = "Ingrese el numero del juego que desea comprar \n"
    gameList.forEach((element, index) => {
        message = message + (index + 1) + " - " + element.gameName+ ", " + element.platform + ", $ " + element.price + "\n"
    });
    let gameIndex = Number(prompt(message))
    console.log(gameIndex);
    while (isNaN(gameIndex) || gameIndex > gameList.length) {
        console.log(typeof(gameIndex));
        console.log(typeof(Number(gameIndex)));
        console.log(gameList.length);
        gameIndex = prompt("Ingrese un valor correcto \n" + message)
    }
    return gameList[gameIndex - 1];
}

function quotasResult() {
    let gameInventory = addGames();
    let game = showGames(gameInventory)
    let quotas = getQuotas();
    let finalPrice = game.getFinalPrice(quotas)

    alert("Precio sin interes: $" + game.price);
    alert("Precio final en " + quotas + " cuotas: $" + finalPrice);
    alert(quotas + " cuotas de $ " + finalPrice / quotas);
}

quotasResult();