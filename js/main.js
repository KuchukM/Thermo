
var WIDTH = 800;
var HEIGHT = 600;

var scene, camera, renderer;

var gameState = new Array();


var init = function (){
	scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(
        WIDTH / - 2, 
        WIDTH / 2, 
        HEIGHT / 2, 
        HEIGHT / - 2, 
        0.1, 1000
        )
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( WIDTH, HEIGHT );
    document.body.appendChild( renderer.domElement );

    //slightly above sceve plane
    camera.position.z = 5;

    var mol = new Molecule(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 0));

    scene.add(mol.mesh);
    gameState.push(mol);
};



var currentTime = Date.now();

var runGameloop = function () {
	requestAnimationFrame( runGameloop );

	var deltaTime = Date.now() - currentTime;

	updateGameState(deltaTime * 0.01);

	renderer.render(scene, camera);

	currentTime = Date.now();
};

var updateGameState = function (deltaTime) {
    gameState.forEach(function(obj) {
        obj.update(deltaTime);
    });
};

init();
runGameloop();
