


var gridNavBurger = document.querySelector(".grid-nav-burger");

var gridWrapper = document.querySelector(".grid-wrapper");

var burgerMenuIcon = document.querySelector(".burger-menu");

var burgerMenuLines = document.querySelectorAll(".line");

var navItems = document.querySelectorAll(".nav__item");

var footer = document.querySelector(".footer");

var footerHaupt = document.querySelector(".footer-haupt");

// To Detect if Iphone is used

var iosDeviceWrapper = function () {
  if(navigator.userAgent.match(/i(Phone|Pod|Pad)/i)) {
    console.log("ios")
    footerHaupt.classList.add("ios__grid-wrapper-footer");
  }else {
   
  }

}

iosDeviceWrapper();

var iosDeviceOverlay = function () {
  if(navigator.userAgent.match(/i(Phone|Pod|Pad)/i)) {
    console.log("ios")
    footer.classList.add("ios__burger-nav-overlay-footer")
  }else {
    
  }

}





burgerMenuIcon.addEventListener("click", () => {
  var burgerOverlay =  document.querySelector(".burger-nav__overlay");
  var burgerNavOverlay = document.createElement("div");
  
  burgerNavOverlay.setAttribute("class", "burger-nav__overlay");
  //Wechsel zwischen erstellen und löschen

  if (!burgerOverlay) {
  console.log("Yummy Burger!");

  document.body.classList.add("--overflow--hidden");
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
    burgerNavOverlay.appendChild(footer);
    footer.classList.remove("ios__grid-wrapper-footer");
    iosDeviceOverlay(); 
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
    footer.classList.remove("ios__burger-nav-overlay-footer");
    footer.classList.add("ios__grid-wrapper-footer");
    gridWrapper.appendChild(footer);
    console.log("0")

    // muss getrennt laufen, da es sonst nicht funktioniert...
    window.setTimeout( () => {
      burgerOverlay.classList.remove("overlay-fadein");
    }, 250);

    window.setTimeout( () => {
      burgerOverlay.classList.add("overlay-fadeout"); 
      document.body.classList.remove("--overflow--hidden"); 
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
    }, 1000);


    window.setTimeout( () => {
      burgerMenuLines[0].classList.remove("burger-fadeout-1__line1");
      burgerMenuLines[1].classList.remove("burger-fadeout-1__line2");
      burgerMenuLines[2].classList.remove("burger-fadeout-1__line3");
      burgerMenuLines[0].classList.add("burger-fadeout-2__line1");
      burgerMenuLines[1].classList.add("burger-fadeout-2__line2");
      burgerMenuLines[2].classList.add("burger-fadeout-2__line3");
      console.log("3")
    }, 1100);

    window.setTimeout( () => {
      burgerMenuLines[0].classList.remove("burger-fadeout-2__line1");
      burgerMenuLines[1].classList.remove("burger-fadeout-2__line2");
      burgerMenuLines[2].classList.remove("burger-fadeout-2__line3");
      console.log("4")
    }, 2000);


    
    
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
    document.body.classList.remove("--overflow--hidden");

    
    gridNavBurger.appendChild(burgerMenuIcon);
    gridNavBurger.appendChild(navItems[0]);
    gridNavBurger.appendChild(navItems[1]);
    gridNavBurger.appendChild(navItems[2]);
    gridWrapper.appendChild(footer);

    if(!burgerOverlay) {
      console.log("jetzt123");
    }
    else {
      
      burgerOverlay.classList.remove("overlay-fadein"); 
      burgerOverlay.classList.remove("overlay-fadeout"); 
      gridNavBurger.removeChild(burgerOverlay);
      document.body.classList.remove("--overflow--hidden");
      console.log("jetzt");
    }
   
    
  }
  else {

  };
});

