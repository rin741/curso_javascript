function evaluarCompra(){
    let elementoRespuesta = document.getElementById("decision");

    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.Value;

    if(precio < 5){
        elementoRespuesta.textContent = "comprar dos litros de leche";
    } 
}