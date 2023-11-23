
let productos = [
	{
		id: 1,
		nombre: 'Computadora',
		descripcion: 'Computadora amd 5 nucleos',
		precio: 50000,
	},
	{
		id: 2,
		nombre: 'Laptop',
		descripcion: 'Laptop amd 5 nucleos',
		precio: 80000,
	},
	{
		id: 3,
		nombre: 'Celular',
		descripcion: 'Celular Samsung',
		precio: 60000,
	},
]

const btnEliminarProducto = document.getElementById('btnEliminarProducto')

btnEliminarProducto.addEventListener('click', () => {
	let id = parseInt(prompt('Ingresa el ID del producto'))
	eliminarProducto(id)
})
function eliminarProducto(id) {
	let index = productos.findIndex((producto) => producto.id === id)
	if (index === -1) {
		alert('No se encontro el producto')
		return
	} else {
		productos = productos.filter((producto) => producto.id !== id)
		console.log(productos)
	}
}

function listarProductos(producto){
	for (let indice = 0; indice < producto.length; indice++) {
		console.log(`Nombre: ${producto[indice].nombre} | Producto: ${producto[indice].descripcion}  | Precio: $${producto[indice].precio}`);
	}
}

listarProductos(producto);
