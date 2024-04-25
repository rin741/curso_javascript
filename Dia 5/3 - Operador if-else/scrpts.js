function evaluarCompra(){
    let elementoRespuesta = document.getElementById("decision");

    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.value;

    if(precio < 5){
        elementoRespuesta.textContent = "comprar 2 litros de leche";
    } else{
        if(precio < 8){
            elementoRespuesta.textContent = "comprar 1 litros de leche"
        } else{
            elementoRespuesta.textContent = "no comprar leche"
        }
    }

}