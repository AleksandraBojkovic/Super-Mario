//promenljive
var $background = document.querySelector("body");
var $mario = document.querySelector("img");
var isGifSet = false;
var positionX = 0;

//event
$background.addEventListener("keydown", moveBackground);
$background.addEventListener("keyup", setImageToStatic);

//funkcija pomeranja backgrounda
function moveBackground (event) {
   
    positionX += 30;    
    $background.style.backgroundPositionX = positionX + "px" ;
    if (isGifSet != true)
    {
        document.querySelector("img").src = "mario_running.gif";

        isGifSet = true;
    }
}

//funkcija za pomeranje Maria iz gifa u static
function setImageToStatic () {
   if (isGifSet === true) {
    document.querySelector("img").src = "mario.png";
    isGifSet = false;

   } 
}
