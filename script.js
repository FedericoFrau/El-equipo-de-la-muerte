//let producto = [
	//{
		//id: 1,
		//nombre: 'Computadora',
		//descripcion: 'Computadora amd 5 nucleos',
		//precio: 50000,
	//},
	//{
		//id: 2,
		//nombre: 'Laptop',
		//descripcion: 'Laptop amd 5 nucleos',
		//precio: 80000,
	//},
	//{
		//id: 3,
		//nombre: 'Celular',
		//descripcion: 'Celular Samsung',
		//precio: 60000,
	//}
//]



const producto = ['Computadora', 'Laptop', 'Celular'];
let carrito = [];

function buscarProducto(producto){
    for(i=0;i<carrito.length;i++) {
        producto.toLowerCase();
        if(producto == carrito[i]) {
            productosBuscados.push(producto)
        }
    }
	console.log(productosBuscados)
}
buscarProducto(producto);


