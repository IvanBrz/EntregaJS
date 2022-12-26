


function cuenta(comprobar) {
    let resultado = true;

if (comprobar < 1) {
    resultado = false;
}

return resultado;
}

let tieneCuenta = Number(prompt("¿Tiene usted cuenta en nuestra pagina? Si(1), No(0)"));

if (cuenta(tieneCuenta)) {
alert("Puedes comprar en nuestra pagina")
}
else {
alert("Necesitas una cuenta para poder comprar en nuestra pagina")
}



function sumarJuegos(juego1,juego2) {
let resultadoSuma = juego1 + juego2;        
alert(juego1 + " + " + juego2 + " = " + resultadoSuma);
}

let precio1 = Number(prompt("Ingrese precio de juego 1"));
let precio2 = Number(prompt("Ingrese precio de juego 2"));

sumarJuegos(precio1, precio2);