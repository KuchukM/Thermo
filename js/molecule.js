var ModelObject = function(){

};

ModelObject.prototype = {

	update: function (deltaTime){

	},

};

var Molecule = function (initial_pos, velocity){
	ModelObject.call(this)

	this.position = initial_pos;
	this.velocity = velocity;

	var geometry = new THREE.CircleGeometry( this.R , 32);
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.position.copy(this.position);
};

Molecule.prototype = Object.assign( Object.create( ModelObject.prototype ), {

	constructor: Molecule,

	R: 10,

	update: function (deltaTime){
		var vel = new THREE.Vector3();
		vel.copy(this.velocity);
		vel.multiplyScalar(deltaTime);
		this.position.add(vel);

		this.mesh.position.copy(this.position);
	},
});

