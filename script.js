// uitklapmenu

let toggleNavStatus = false;

let toggleNav = function (){
    let getMenu = document.querySelector(".nav-colors")
  let getMenuUl = document.querySelector(".nav-colors ul");
  let getMenuButtons = document.querySelectorAll(".nav-colors button");

  if(toggleNavStatus === false) {
      getMenu.style.opacity="1";
    getMenuUl.style.opacity = "1";
    
    let arrayLength = getMenuButtons.length;
    for (let i = 0; i < arrayLength; i++) {
      getMenuButtons[i].style.opacity = "1";
    }
    
    toggleNavStatus = true;
     }
  
else if(toggleNavStatus === true) {
    
    
    
    let arrayLength = getMenuButtons.length;
    for (let i = 0; i < arrayLength; i++) {
      getMenuButtons[i].style.opacity = "0";
    }
    getMenuUl.style.opacity = "0";
    
    toggleNavStatus = false;
     }
   
}



const body = document.querySelector("body");

//home knop

const colorToggleHome = function(){
    
  toggleNav()
  
  body.classList.add("home")
body.classList.remove("red", "orange", "yellow", "green")

}

const homeButton = document.getElementById("home");

homeButton.addEventListener("click", colorToggleHome)

// rode knop

const colorToggleRed = function(){

   toggleNav()

body.classList.add("red")
body.classList.remove("orange", "yellow", "green")


}


const redButton = document.getElementById("red");

redButton.addEventListener("click", colorToggleRed);

// oranje knop

const colorToggleOrange = function(){

    toggleNav()


    body.classList.add("orange")
    body.classList.remove("red", "yellow", "green")

}

const orangeButton = document.getElementById("orange")

orangeButton.addEventListener("click", colorToggleOrange);


// gele knop

const colorToggleYellow = function(){

  toggleNav()

  body.classList.add("yellow")
  body.classList.remove("red", "orange", "green")
}

const yellowButton = document.getElementById("yellow")

yellowButton.addEventListener("click", colorToggleYellow)
// groene knop

const colorToggleGreen = function (){
  toggleNav()

  body.classList.add("green")
  body.classList.remove("red", "orange", "yellow")
}

const greenButton = document.getElementById("green")

greenButton.addEventListener("click", colorToggleGreen)



