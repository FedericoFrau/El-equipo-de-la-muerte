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
	}
]

const btnBuscarProducto = document.getElementById("buscarProducto")
btnBuscarProducto.addEventListener("click", ()=>{
	let producABuscar = prompt("Ingrese el producto a buscar")
	buscarProducto(producABuscar);

})

const btnBuscarProductoResultado = document.getElementById("buscarProductoResultado")



function buscarProducto(producABuscar){
    for(i=0;i<productos.length;i++) {
        let busqueda = producABuscar.toLowerCase();
		let resultado = productos[i].nombre.toLowerCase()
		
        if(busqueda == resultado) {
			btnBuscarProductoResultado.textContent = `El resultado es: ${productos[i].nombre}, 
			${productos[i].descripcion}, ${productos[i].precio} `
			return productos[i]
        }else{
			btnBuscarProductoResultado.textContent = `Producto no encontrado `
			return
		}
    }
	
}



