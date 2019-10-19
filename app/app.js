var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

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

// var geometry = new THREE.BoxGeometry( 5, 1, 0.2 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cubeTop = new THREE.Mesh( geometry, material );
// cubeTop.position.y = 0;
// scene.add(cubeTop);



var controls = new THREE.OrbitControls(camera);

controls.enableZoom = false;
controls.enabelDumping = true;
controls.autoRotate = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  
}

animate();


var loader = new THREE.FontLoader();
loader.load("/fonts/helvetiker_regular.typeface.json", function(font) {

  var text = new THREE.TextGeometry("studio nah", {
    font: font,
    size: 70,
    height: 20,
    // curveSegments: 1,
    // bevelEnabled: true,
    // bevelThickness: 10,
    // bevelSize: 8,
    // bevelOffSet: 0,
    // bevelSegments: 5
  });

  text.position

  var textMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
  var mesh = new THREE.Mesh(text, textMaterial);
  scene.add(mesh);
  text.center();
});


