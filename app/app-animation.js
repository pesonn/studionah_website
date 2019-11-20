
// Fenstergröße auf .grid-main beziehen nicht auf Fenstergröße
var gridmain = document.querySelector(".grid-main"); 

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, gridmain.clientWidth / gridmain.clientHeight, 0.1, 600);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(gridmain.clientWidth, gridmain.clientHeight);

renderer.setPixelRatio(1.55);

gridmain.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(gridmain.clientWidth, gridmain.clientHeight);
  camera.aspect = gridmain.clientWidth / gridmain.clientHeight;
  
  camera.updateProjectionMatrix();
});



/* MEDIA QUERY FÜR FARBSCHEMA */
// setzt die Farbe beim ersten Laden der Seite
function setInitialBackgroundColor() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    renderer.setClearColor("#000");
  }
  else {
    renderer.setClearColor("#f5f5f5");
  }
};
setInitialBackgroundColor();

//ändert die Farbe während man auf der Seite Ist
window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    renderer.setClearColor("#000");
  }
  else {
    renderer.setClearColor("#f5f5f5");
  }
});



/* MEDIA QUERY FÜR CAMERA POSITION */
// muss auf window bleiben, da dieses die Größe steuert

// setzt die Camera Position beim ersten Laden der Seite
function setInitialCameraPosition() {
  if (window.matchMedia("(max-width: 650px)").matches){
    camera.position.z = 300;
  }
  else {
    camera.position.z = 400;
  }
};
setInitialCameraPosition();

//ändert die Cameraposition während man auf der Seite Ist
window.matchMedia("(max-width: 650px)").addListener(() => {
  if (window.matchMedia("(max-width: 650px)").matches){
    camera.position.z = 300;
  }
  else {
    camera.position.z = 400;
  }
});



// /* ORBIT CONTROLS */

// var controls = new THREE.OrbitControls(camera);
// controls.enableZoom = false;
// controls.enabelDumping = true;
// controls.autoRotate = false;


/* TRACKBALL CONTROLS */

var controls = new THREE.TrackballControls(camera);


var loader = new THREE.FontLoader();
loader.load("fonts/helvetiker_regular.typeface.json", function(font) {

  var textMaterial;
  var setTextMaterial = function() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches){
      textMaterial = new THREE.MeshBasicMaterial({color: 0xf5f5f5, reflectivity: 0});
      console.log(textMaterial);
    }
    else {
      textMaterial = new THREE.MeshBasicMaterial({color: 0x000, reflectivity: 0});
      console.log("2.");
    }
  };

  setTextMaterial();

  

console.log(textMaterial);


  var text = new THREE.TextGeometry("studio nah", {
    font: font,
    size: 60,
    height: 12,
  });

  text.scale
  var mesh = new THREE.Mesh(text, textMaterial);;
   window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches){
      setTextMaterial();
      mesh = new THREE.Mesh(text, textMaterial);
      scene.add(mesh);
      console.log("3.");
    }
    else {
      setTextMaterial();
      mesh = new THREE.Mesh(text, textMaterial);
      scene.add(mesh);
      console.log("4.");
    }
  });

  // var textMaterial = new THREE.MeshBasicMaterial({color: 0x353535, reflectivity: 0});
  // var mesh =  new THREE.Mesh(text, textMaterial);
  scene.add(mesh);
  text.center();
   
});


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();





