function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function sumar(){
    let numero1 = +document.getElementById("primerParametro").value
    let numero2 = +document.getElementById("segundoParametro").value
    mostrarResultado(numero1 + numero2);
}

function restar(){
    let numero1 = +document.getElementById("primerParametro").value
    let numero2 = +document.getElementById("segundoParametro").value
    mostrarResultado(numero1 - numero2);
}

function multiplicar(){
    let numero1 = +document.getElementById("primerParametro").value
    let numero2 = +document.getElementById("segundoParametro").value
    mostrarResultado(numero1 * numero2);
}

function dividir(){
    let numero1 = +document.getElementById("primerParametro").value
    let numero2 = +document.getElementById("segundoParametro").value
    mostrarResultado(numero1 / numero2);
}

function potencia(){
    let numero1 = +document.getElementById("primerParametro").value
    let numero2 = +document.getElementById("segundoParametro").value
    mostrarResultado(Math.pow(numero1,numero2));
}

function raiz(){
    let numero = +document.getElementById("segundoParametro").value
    mostrarResultado(Math.sqrt(numero));
}

function absoluto(){
    let numero = +document.getElementById("segundoParametro").value
    mostrarResultado(Math.abs(numero));
}

function random(){
    let minimo = +document.getElementById("primerParametro").value
    let maximo = +document.getElementById("segundoParametro").value
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function round(){
    let resultado = +document.getElementById("resultado").value
    mostrarResultado(Math.round(resultado));
}

function floor(){
    let resultado = +document.getElementById("resultado").value
    mostrarResultado(Math.floor(resultado));
}

function ceil(){
    let resultado = +document.getElementById("resultado").value
    mostrarResultado(Math.ceil(resultado));
}