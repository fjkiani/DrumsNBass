//when buttons get clicked, call it -> adding addEventListener
//finds the first button, adds an eventEventListener when it clicks
//passing a function as in input which gets called later (handleClick)


///////Detecting button press
//create a variable that loops through drum buttons
let numbOfDrumButtons = document.querySelectorAll(".drum").length;

//loop through the drum buttons
for (var i = 0; i < numbOfDrumButtons; i++) {
  
// store each value of the drum -> grab the elements that have a class of drum and add an eventListener 
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//figure out which button gets played and triggers the event 
//this will trigger the event of the button 
// console.log(this.innerHTML);    
// this.style.color="white";  

let buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);


  });
}


///Detecting Keyboard press
document.addEventListener("keydown", function (event) {
       makeSound(event.key);
});

function makeSound (key) {
        switch (key) {
                case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play(); 
                break;
        
                case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play(); 
                break;
        
                case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play(); 
                break;
        
                case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play(); 
                break;
        
                case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play(); 
                break;
        
                case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play(); 
                break;
        
                case "l":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play(); 
                break;
        
        
        
                default: console.log(buttonInnerHTML);
        }

}


///change color 


// function randomColor() {
//         return '#'+ ('000000' + (Math.random()*0xFFFFFF).toString(16)).slice(-6)
//     }
    
//     function setColor(){
//         document.getElementById('myDiv').style.backgroundColor = randomColor();
//         setTimeout(setColor, 2000);
//     }
//     setColor();