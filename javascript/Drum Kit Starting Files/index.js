for(i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickado);
}

var letra = 0;
document.addEventListener("keydown", function(a){
    letra = a.key;
    clickado();
});

function brilho(sapato){
    var pamonha = document.querySelector("." + sapato);
    pamonha.classList.add("pressed");
    document.querySelector().removeEventListener

    setTimeout(function(){
        pamonha.classList.remove("pressed");
    }, 100)
}

function clickado(){
    if(letra == 0){letra = this.innerHTML;}
    brilho(letra);
    switch (letra) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var crash = new Audio("./sounds/kick-bass.mp3");
            crash.play();
            break;
        case "s":
            var crash = new Audio("./sounds/snare.mp3");
            crash.play();
            break;
        case "d":
            var crash = new Audio("./sounds/tom-1.mp3");
            crash.play();
            break;
        case "j":
            var crash = new Audio("./sounds/tom-2.mp3");
            crash.play();
            break;
        case "k":
            var crash = new Audio("./sounds/tom-3.mp3");
            crash.play();
            break;
        case "l":
            var crash = new Audio("./sounds/tom-4.mp3");
            crash.play();
            break;
        
        default:
            break;
    }
}