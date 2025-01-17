// Tenemos un li de productos

const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

// Se cambió el nombre de las variables para hacerlas descriptivas
const divListaElementos = document.getElementById("lista-de-productos")
const input = document.querySelector('.input');

// Se implementó la refactorización de código implementando la función y usando forEach
const displayProductos = (productos) => {
    productos.forEach(producto => {
        let divElement = document.createElement("div")
        divElement.classList.add("producto")

        let pElement = document.createElement("p")
        pElement.classList.add("titulo")
        pElement.textContent = producto.nombre

        let imagen = document.createElement("img");
        imagen.setAttribute('src', producto.img);

        divElement.appendChild(pElement)
        divElement.appendChild(imagen)

        divListaElementos.appendChild(divElement)
    })
}
displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
    while (divListaElementos.firstChild) {
        divListaElementos.removeChild(divListaElementos.firstChild);
    }

    const texto = input.value;
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto);

    // Se eliminó código repetido usando una función
    displayProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}