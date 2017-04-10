document.addEventListener("keydown", avanzar);
var vibora = document.getElementById("vibora");
var boton = document.getElementById("reiniciar");
boton.addEventListener("click", reIniciar);

//Posiciones iniciales según el css margin-right y margin-left "auto"
var posY = 0;
var posX = 0;

//Unidad de movimietno que le suma uno a la medida de la vibora para avanzar según la medida de la vibora
var movimiento = 50;



function avanzar(evento){
    /*Función que controla el movimiento de la vibora con un evento que detecta cuando se oprimen las teclas flechas 
     y en función de que flecha se oprime la vibora toma una dirección*/

    switch(evento.keyCode) {
        case 38: //Arriba
        posY -= movimiento;
        if(posY < 0) {
            juegoAcabado();
        } else {
            vibora.style.marginTop = posY + "px";
        }
            break;

        case 40: //Abajo
        posY += movimiento;
        if(posY > 481){
            juegoAcabado();
        } else {
            vibora.style.marginTop = posY + "px";
        }
            break;
    
        case 39: //Derecha
        posX += movimiento;
        if(posX > 481) {
            juegoAcabado();
        } else {
            vibora.style.marginLeft = posX + "px";
        }

            break;
      
        case 37: //Izquierda
        posX -= movimiento;
        if(posX < 0){
            juegoAcabado();
        } else {
            vibora.style.marginLeft = posX + "px";
        }

            break;
        
        default:

        alert("Tecla no válida, usa las flechas.")
            break;
            
            
                 }
}

function juegoAcabado(){ 
    /*funcion que detiene el juego cuando la vibora toca alguno de los límites del contenedor*/ 
    alert("Game over");
    document.removeEventListener("keydown", avanzar);
}

function reIniciar(event) {
    
    vibora.style.marginTop = 0;
    vibora.style.marginLeft = 0;
    juegoAcabado();
    document.addEventListener("keydown", avanzar)
    console.log(event);
}