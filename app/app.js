
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1200);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#f5f5f5")
document.body.appendChild(renderer.domElement);




window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  
  camera.updateProjectionMatrix();
});

camera.position.z = 500;

var controls = new THREE.OrbitControls(camera);

controls.enableZoom = false;
controls.enabelDumping = true;
controls.autoRotate = true;

var loader = new THREE.FontLoader();
loader.load("/fonts/helvetiker_regular.typeface.json", function(font) {

  var text = new THREE.TextGeometry("studio nah", {
    font: font,
    size: 80,
    height: 12,
  });

  text.scale

  var textMaterial = new THREE.MeshBasicMaterial({color: 0x454545});
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





