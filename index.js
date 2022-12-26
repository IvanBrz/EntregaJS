


let edad = prompt("Ingrese su edad");
edad = Number(edad);

if (edad > 17) {
    alert("Disfrute de GamerWorld");
} else {
    alert("Para ver algunos de nuestros juegos necesitas ser mayor de 18 años");
}


let listaCate = "";

let categoria = prompt("Ingrese sus categorias de juegos favoritas, para terminar el proceso ingrese 0");

while (categoria != 0) {
    listaCate = listaCate + categoria + ", ";
    categoria = prompt("Ingrese sus categorias de juegos favoritas, para terminar el proceso ingrese 0");
}

alert("Estas son tus categorias favoritas: " + listaCate);






