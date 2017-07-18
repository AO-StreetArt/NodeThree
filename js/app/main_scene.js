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

// Add a cube
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// Load the model
var obj = null;
var loader = new THREE.JSONLoader();
var torus = null;
loader.load('./resources/json/torus.json', function(obj) {
  torus = new THREE.Mesh(obj, material)
  scene.add(torus);
});

// Add some ambient lighting
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

//Update the camera position so that we can see the cube
camera.position.z = 20

//Actually set up the animation
function animate() {
  requestAnimationFrame( animate );
  //torus.rotation.x += 0.1;
  //torus.rotation.y += 0.1;
  renderer.render( scene, camera );
}
animate();
