let productos = [];

fetch('../data/productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data;
    cargarProductos(productos);
  });

const contenedorProductos = document.querySelector('#menuRestaurantPlatos');

function cargarProductos(productos) {
  contenedorProductos.innerHTML = '';

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('menuContainer__cardContainer');
    div.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}" />
    <div class="menuContainer__cardContainer__info">
      <div class="menuContainer__cardContainer__info__namePrice">
        <h3>${producto.nombre}</h3>
        <h3>${producto.precio}</h3>
      </div>
      <div class="menuContainer__cardContainer__info__tagContainer">
      ${producto.tags
        .map(
          el => `<div class="menuContainer__cardContainer__info__tagContainer__tag">
      <p>${el}</p>
    </div>`
        )
        .join('')}
        
      </div>
    </div>
        `;

    contenedorProductos.append(div);
  });
}
