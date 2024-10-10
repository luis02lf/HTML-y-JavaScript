

const listaDeCompras = {
    manzana: 2,
    pera: 3,
    naranja: 4,
    uva: 1,
};

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

for (fruta of listaDeCompras) {
    console.log(fruta);
}