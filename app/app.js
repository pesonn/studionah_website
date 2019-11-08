
// TODO: Fenstergröße auf .grid-main beziehen nicht auf Fenstergröße

var gridmain = document.querySelector(".grid-main"); 

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, gridmain.clientWidth / gridmain.clientHeight, 0.1, 600);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(gridmain.clientWidth, gridmain.clientHeight);
renderer.setClearColor("#f5f5f5");
renderer.setPixelRatio(1.55);

gridmain.appendChild(renderer.domElement);



window.addEventListener("resize", () => {
  renderer.setSize(gridmain.clientWidth, gridmain.clientHeight);
  camera.aspect = gridmain.clientWidth / gridmain.clientHeight;
  
  camera.updateProjectionMatrix();
});


camera.position.z = 400;

// /* ORBIT CONTROLS */

// var controls = new THREE.OrbitControls(camera);
// controls.enableZoom = false;
// controls.enabelDumping = true;
// controls.autoRotate = false;


/* TRACKBALL CONTROLS */

var controls = new THREE.TrackballControls(camera);





var loader = new THREE.FontLoader();
loader.load("fonts/helvetiker_regular.typeface.json", function(font) {

  var text = new THREE.TextGeometry("studio nah", {
    font: font,
    size: 60,
    height: 12,
  });

  text.scale

  var textMaterial = new THREE.MeshBasicMaterial({color: 0x353535, reflectivity: 0});
  var mesh = new THREE.Mesh(text, textMaterial);
  scene.add(mesh);
  text.center();
   
});


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();





