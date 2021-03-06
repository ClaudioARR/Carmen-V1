// OBJETO PRODUCTO SIRVE COMO PARAMETRO PARA AGREGAR A LA BASE DE DATOS
export const PRODUCTO = {
    tipo: "",
    idrow: "",
    mes: "",
    nombre: "",
    precio: "",
    fecha: ""
}

export var PRODUCTOS: any = []; // ARRAY DE PRODUCTOS
export var PRECIO: any = []; // ARRAY DE PRECIOS ( SE UTILIZA EN EL TOTAL MENSUAL )



// SETEA EL PRODUCTO Y EL PRECIO TOTAL
export function setPRODUCTOS(item: any) {
    let cont = 0;
    item.forEach((i: any) => {
        PRODUCTOS.push(i);
        cont = cont + parseInt(i.precio);
    });
    PRECIO.push(cont);
}

// LIMPIA LOS ARRAYS DE PRECIO Y PRODUCTOS
export function cleanPRODUCTOS() {
    let clean: any = [];
    let clean2: any = [];
    PRODUCTOS = clean;
    PRECIO = clean2;
}


// PRODUCTO A ELIMINAR ( PRESINDIBLE )
export const DELETEPRODUCTO = {
    idrow: "",
    mes: "",
    nombre: "",
    precio: "",
    fecha: ""
}


// SETEA EL PRODUCTO A ELIMINAR DE LA BASE DE DATOS
function setDELETEPRODUCTO(itemID: string, month: string, nombre: string, precio: string, fecha: string) {
    DELETEPRODUCTO.idrow = itemID;
    DELETEPRODUCTO.mes = month;
    DELETEPRODUCTO.nombre = nombre;
    DELETEPRODUCTO.precio = precio;
    DELETEPRODUCTO.fecha = fecha;
}


// ELIMINA UN ITEM DE LA BASE DE DATOS Y DE LA TABLA HTML
export function removeITEM(itemID: string, month: string) {

    let producto = new Array();
    let nombreA = new Array();
    let precioA = new Array();
    let fechaA = new Array();

    producto = document.getElementById(itemID).innerHTML.split('>');
    nombreA = producto[2].split('<');
    precioA = producto[5].split('<');
    fechaA = producto[7].split('<');

    var nombre = nombreA[0];
    var precio = precioA[0];
    var fecha = fechaA[0];

    console.log(nombre);
    console.log(precio);
    console.log(fecha);
    console.log(itemID);
    console.log(month);

    setDELETEPRODUCTO(itemID, month, nombre, precio, fecha);

    document.getElementById(itemID).remove();

}





