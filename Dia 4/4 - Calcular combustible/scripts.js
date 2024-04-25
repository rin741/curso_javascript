function calcularlistros(){
    var elementoKm = document.getElementById("textoKm");
    var textoKm = elementoKm.value;
    var cantKm = Number(textoKm);

    var cantlitros = cantKm / 8.8;

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantlitros + "litros de combustible"
}