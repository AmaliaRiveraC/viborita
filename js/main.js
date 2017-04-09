document.addEventListener("keydown", avanzar);
var vibora = document.getElementById("vibora");
var posY = 0;
var posX = 0;
var movimiento = 21;



function avanzar(evento){

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
    alert("Game over");
    document.removeEventListener("keydown", avanzar);
}