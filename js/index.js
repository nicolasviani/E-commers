const botonMenu = document.querySelector("#botonMenu");
const contenedorProductos = document.querySelector(".contenedor-productos");

let div = document.createElement('div');
div.classList.add("productos");
contenedorProductos.appendChild(div);

let img = document.createElement("img");
img.classList.add("producto-imagen");
img.setAttribute("src", "./assets/images/buzos-camperas-hombres-html/buzo-nike.png");
contenedorProductos.appendChild(img);

div = document.createElement("div");
div.classList.add("producto-detalle");
contenedorProductos.appendChild(div);


let h3 = document.createElement("h3");
h3.classList.add("producto-titulo");
contenedorProductos.innerHTML = `<h3 class="producto-titulo">Buzo Nike</h3>`;

let p = document.createElement("p");
p.classList.add("producto-precio");
contenedorProductos.innerHTML = `<p class="producto-precio">$24999</p>`;

console.log(contenedorProductos);

