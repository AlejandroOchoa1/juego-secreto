// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del Numero Secreto'

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10'

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = []
let numeroMaximo = 10


function asignarTextoElemento(elemento, texto){
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if (numeroDeUsuario> numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor')
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //si ya sorteamos todos los numeros 
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }else{
        //si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero Secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto() ;
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje e intervalo de numeros
    //generar el numero aleatorio
    //incicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();


