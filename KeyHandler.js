var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed =false;
var ShieldH = false;
var restart =false;
document.addEventListener("keydown", keyHDownHandler, false);
document.addEventListener("keyup", keyHUpHandler, false);
document.addEventListener("keydown", keyVDownHandler, false);
document.addEventListener("keyup", keyVUpHandler, false);
document.addEventListener("keydown", DSpaceHandler, false);
document.addEventListener("keyup", USpaceHandler, false);
 
document.addEventListener("keydown", ShieldHandler, false);

document.addEventListener("keydown", RestartD, false);
document.addEventListener("keyup", RestartU, false);
//--------------------------------------------------
function ShieldHandler(e){
    if (e.keyCode == 88) {
        Player.shield = !Player.shield;
    }
}
function RestartD(e){
    if(e.keyCode == 82) {
        restart = true;
    }
}
function RestartU(e){
    if(e.keyCode == 82) {
        restart = false;
    }
}
//--------------------------------------------------
function DSpaceHandler(e){
	if(e.keyCode == 32) {
        spacePressed = true;
    }
}
function USpaceHandler(e) {
    if(e.keyCode == 32) {
        spacePressed = false;
    }
}
//------------------------------------------
function keyHDownHandler(e){
	if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyHUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
//----------------------------------------------------
function keyVDownHandler(e){
	if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
}
function keyVUpHandler(e) {
    if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}
