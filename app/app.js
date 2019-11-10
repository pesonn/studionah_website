var gridNavBurger = document.querySelector(".grid-nav-burger");

var burgerMenuIcon = document.querySelector(".burger-menu");

var burgerMenuLines = document.querySelectorAll(".line");

var navItems = document.querySelectorAll(".nav__item");





burgerMenuIcon.addEventListener("click", () => {
  var burgerOverlay =  document.querySelector(".burger-nav__overlay");
  var burgerNavOverlay = document.createElement("div");
  
  burgerNavOverlay.setAttribute("class", "burger-nav__overlay");
  //Wechsel zwischen erstellen und löschen

  if (!burgerOverlay) {
  console.log("Yummy Burger!");
    // DIV .burger-nav__Overlay erstellen
    burgerNavOverlay.setAttribute("class", "burger-nav__overlay");

  // alle benötigten Klassen in DIV verschieben


  burgerMenuLines[0].classList.add("burger-fadein-1__line1");
  burgerMenuLines[1].classList.add("burger-fadein-1__line2");
  burgerMenuLines[2].classList.add("burger-fadein-1__line3");

  window.setTimeout( () => {
    burgerNavOverlay.appendChild(burgerMenuIcon);
    burgerNavOverlay.appendChild(navItems[0]);
    burgerNavOverlay.appendChild(navItems[1]);
    burgerNavOverlay.appendChild(navItems[2]);
    
    gridNavBurger.appendChild(burgerNavOverlay);

    burgerNavOverlay.classList.add("overlay-fadein");
  }, 300);

  window.setTimeout( () => {
    burgerMenuLines[0].classList.add("burger-fadein-2__line1");
    burgerMenuLines[1].classList.add("burger-fadein-2__line2");
    burgerMenuLines[2].classList.add("burger-fadein-2__line3");
  }, 1100)
  }
  else {
    console.log("Klick nicht so viel!");
    
    burgerMenuLines[0].classList.remove("burger-fadein-1__line1");
    burgerMenuLines[1].classList.remove("burger-fadein-1__line2");
    burgerMenuLines[2].classList.remove("burger-fadein-1__line3");
    burgerMenuLines[0].classList.remove("burger-fadein-2__line1");
    burgerMenuLines[1].classList.remove("burger-fadein-2__line2");
    burgerMenuLines[2].classList.remove("burger-fadein-2__line3");
  
    burgerMenuLines[0].classList.add("burger-fadeout-1__line1");
    burgerMenuLines[1].classList.add("burger-fadeout-1__line2");
    burgerMenuLines[2].classList.add("burger-fadeout-1__line3");
    console.log("0")

    // muss getrennt laufen, da es sonst nicht funktioniert...
    window.setTimeout( () => {
      burgerOverlay.classList.remove("overlay-fadein");
    }, 250);

    window.setTimeout( () => {
      burgerOverlay.classList.add("overlay-fadeout"); 
      console.log("1")
    }, 250);

    window.setTimeout( () => {
      burgerOverlay.classList.remove("overlay-fadeout");
      gridNavBurger.appendChild(burgerMenuIcon);
      gridNavBurger.appendChild(navItems[0]);
      gridNavBurger.appendChild(navItems[1]);
      gridNavBurger.appendChild(navItems[2]);
      gridNavBurger.removeChild(burgerOverlay); 
      console.log("2") 
    }, 1100);


    window.setTimeout( () => {
      burgerMenuLines[0].classList.remove("burger-fadeout-1__line1");
      burgerMenuLines[1].classList.remove("burger-fadeout-1__line2");
      burgerMenuLines[2].classList.remove("burger-fadeout-1__line3");
      burgerMenuLines[0].classList.add("burger-fadeout-2__line1");
      burgerMenuLines[1].classList.add("burger-fadeout-2__line2");
      burgerMenuLines[2].classList.add("burger-fadeout-2__line3");
      console.log("3")
    }, 250);

    window.setTimeout( () => {
      burgerMenuLines[0].classList.remove("burger-fadeout-2__line1");
      burgerMenuLines[1].classList.remove("burger-fadeout-2__line2");
      burgerMenuLines[2].classList.remove("burger-fadeout-2__line3");
      console.log("4")
    }, 1000);


    
    
  };

});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 649) {
    let burgerOverlay =  document.querySelector(".burger-nav__overlay");

    burgerMenuLines[0].classList.remove("burger-fadein-1__line1");
    burgerMenuLines[1].classList.remove("burger-fadein-1__line2");
    burgerMenuLines[2].classList.remove("burger-fadein-1__line3");
    burgerMenuLines[0].classList.remove("burger-fadein-2__line1");
    burgerMenuLines[1].classList.remove("burger-fadein-2__line2");
    burgerMenuLines[2].classList.remove("burger-fadein-2__line3");
    burgerMenuLines[0].classList.remove("burger-fadeout-1__line1");
    burgerMenuLines[1].classList.remove("burger-fadeout-1__line2");
    burgerMenuLines[2].classList.remove("burger-fadeout-1__line3");
    burgerMenuLines[0].classList.remove("burger-fadeout-2__line1");
    burgerMenuLines[1].classList.remove("burger-fadeout-2__line2");
    burgerMenuLines[2].classList.remove("burger-fadeout-2__line3");

    
    gridNavBurger.appendChild(burgerMenuIcon);
    gridNavBurger.appendChild(navItems[0]);
    gridNavBurger.appendChild(navItems[1]);
    gridNavBurger.appendChild(navItems[2]);

    if(!burgerOverlay) {
      console.log("jetzt123");
    }
    else {
      
      burgerOverlay.classList.remove("overlay-fadein"); 
      burgerOverlay.classList.remove("overlay-fadeout"); 
      gridNavBurger.removeChild(burgerOverlay);
      console.log("jetzt");
    }
   
    
  }
  else {

  };
});