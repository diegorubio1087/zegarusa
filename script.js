const productos = [
  { id: 1, nombre: "Pan de zanahoria", precio: 20, imagen: "images/pan1.jpg" },
  { id: 2, nombre: "Croissant", precio: 15, imagen: "images/pan2.jpg" },
  { id: 3, nombre: "Concha", precio: 10, imagen: "images/pan3.jpg" },
  { id: 4, nombre: "Pastel chocolate", precio: 120, imagen: "images/pan4.jpg" },
  { id: 5, nombre: "Pan integral", precio: 18, imagen: "images/pan5.jpg" },
  { id: 6, nombre: "Pan de ajo", precio: 12, imagen: "images/pan6.jpg" },
  { id: 7, nombre: "Pizza individual", precio: 45, imagen: "images/pan7.jpg" },
  { id: 8, nombre: "Bollos dulces", precio: 25, imagen: "images/pan8.jpg" },
  { id: 9, nombre: "Empanadas", precio: 30, imagen: "images/pan9.jpg" },
  { id: 10, nombre: "Galletas", precio: 8, imagen: "images/pan10.jpg" },
];

const contenedor = document.querySelector(".grid");
const tbody = document.querySelector("#lista-carrito tbody");
const vaciarBtn = document.getElementById("vaciar-carrito");
let carrito = [];

// Mostrar productos en página
productos.forEach(prod => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>$${prod.precio}</p>
    <a href="#" class="btn agregar-carrito" data-id="${prod.id}">Agregar</a>
  `;
  contenedor.appendChild(div);
});

// Manejo de clicks
document.addEventListener("click", e => {
  if (e.target.classList.contains("agregar-carrito")) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const producto = productos.find(p => p.id === id);

    if (!carrito.find(p => p.id === id)) {
      carrito.push(producto);
      actualizarCarrito();
    } else {
      alert("Ya agregaste este producto");
    }
  }

  if (e.target.classList.contains("borrar-producto")) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    carrito = carrito.filter(p => p.id !== id);
    actualizarCarrito();
  }
});

// Vaciar carrito
vaciarBtn.addEventListener("click", e => {
  e.preventDefault();
  carrito = [];
  actualizarCarrito();
});

// Función para renderizar carrito
function actualizarCarrito() {
  tbody.innerHTML = "";
  carrito.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><img src="${p.imagen}" alt="${p.nombre}"></td>
      <td>${p.nombre}</td>
      <td>$${p.precio}</td>
      <td><a href="#" class="borrar-producto" data-id="${p.id}">X</a></td>
    `;
    tbody.appendChild(fila);
  });
}









