
//button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var a=this.innerHTML;
    catchKey(a);
    keyAnimation(a);
  });}

  //keyboard press
document.addEventListener("keydown",function(event){
  catchKey(event.key);
  keyAnimation(event.key);
})


  function catchKey(key){
        switch (key) {
          case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

          case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

          case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

          case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

          case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

          case "k":
            var crash = new Audio('sounds/kick-bass.mp3');
            crash.play();
            break;

          case "l":
            var kick = new Audio('sounds/crash.mp3');
            kick.play();
            break;




      }
      }

      function keyAnimation(key){
        var temp=document.querySelector("."+key);
        temp.classList.add("pressed");
       setTimeout(function(){
         temp.classList.remove("pressed");
       },100);
      }
