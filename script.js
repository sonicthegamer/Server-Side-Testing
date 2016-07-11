window.onload = function(){
var scene,
    camera,
    renderer;

function createRenderer(){
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor('#575225',1);
  renderer.setSize(window.innerWidth,window.innerHeight);
}

function createCamera(){
  camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);

  camera.position.x = 15;
  camera.position.y = 16;
  camera.position.z = 13;
  camera.lookAt(scene.position);

}

function init(){
  scene = new THREE.Scene();

  createRenderer();
  createCamera();

  document.body.appendChild(renderer.domElement);

  render();
}



function render(){


  renderer.render(scene, camera);


  requestAnimationFrame(render);
}

init();
}
