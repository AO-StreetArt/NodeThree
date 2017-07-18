// Set up a Scene
var scene = new THREE.Scene();
// Set up a renderer
var renderer = new THREE.WebGLRenderer();
// Ensure that the renderer window is sized correctly
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//Insert the renderer into the document
document.body.appendChild( renderer.domElement );

// Set up a camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Set up some orbital controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0.6, 0);

// Load the model
var loader = new THREE.JSONLoader();
var obj = null;
var torus = null;
loader.load('./resources/json/torus.json', function(obj, materials) {
  torus = new THREE.Mesh(obj, new THREE.MeshStandardMaterial(materials))
  scene.add(torus);
});

// Add some directional lighting
var light = new THREE.PointLight( 0xff0000, 10, 100 );
light.position.set( 0, 2, 0 );
scene.add( light );

var light2 = new THREE.PointLight( 0x2194ce, 5, 100 );
light2.position.set( -1, -2, 0 );
scene.add( light2 );

//Update the camera position so that we can see the cube
camera.position.z = 20

// Ensure that our window resizes dynamically
window.addEventListener('resize', onWindowResize, false);

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//Actually set up the animation
function animate() {
  requestAnimationFrame( animate );
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  controls.update();
  renderer.render( scene, camera );
}
animate();
