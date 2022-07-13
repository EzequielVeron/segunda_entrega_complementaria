class Producto {
    constructor(id, nombre, marca, precio, stock ) {
        this.id=id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1, "barra de chocolate", "Chocolatory", ["400"], "50")
const producto2 = new Producto(2, "bocadito dulce de leche", "woow", ["200"], "120")
const producto3 = new Producto(3, "tableta de chocolate", "Chocolatory", ["600"], "100")
const producto4 = new Producto(4, "chocolate de leche", "Chocolatory", ["400"], "75")



/////////////////////////////////////////////////////////////////////////////

const arrayProductos = [producto1, producto2, producto3, producto4]

///////////////////////////////////////////////////////////////

function validacionProducto(){
    elegirProducto = prompt(`los productos que tenemos son los siguientes:\producto1: ${arrayProductos[0].nombre}el precio es de: ${arrayProductos[0].precio}\producto1:${arrayProductos[1].nombre}el precio es de ${arrayProductos[2].precio}\producto3: ${arrayProductos[3].nombre}el precio es de ${arrayProductos[3].precio}\producto4`);
}

do {
    while (isNaN(
        seleccionarProducto
    )){
        alert("ingresar valor numerico");
        seleccionarProducto= prompt(`los productos que tenemos son los siguientes:\producto1: ${arrayProductos[0].nombre} el precio es de: ${arrayProductos[0].precio}\producto1:${arrayProductos[1].nombre}el precio es de ${arrayProductos[2].precio}\producto3: ${arrayProductos[3].nombre}el precio es de ${arrayProductos[3].precio}\producto4`);
    }
}

if (seleccionarProducto >0 && seleccionarProducto <=4)
    {
        switch(seleccionarProducto){
            case"1": 
            nombreSeleccion = arrayProductos[0].nombre;
            valorSEleccion = arrayProductos[0].precio;
            break
            case"2": 
            nombreSeleccion = arrayProductos[1].nombre;
            valorSEleccion = arrayProductos[1].precio;
            break
            case"3": 
            nombreSeleccion = arrayProductos[2].nombre;
            valorSEleccion = arrayProductos[2].precio;
            break
            case"4": 
            nombreSeleccion = arrayProductos[3].nombre;
            valorSEleccion = arrayProductos[3].precio;
            break
            case"5": 
            nombreSeleccion = arrayProductos[4].nombre;
            valorSEleccion = arrayProductos[4].precio;
            break
            

        }
        break
    }

