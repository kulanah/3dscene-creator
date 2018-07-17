import * as THREE from "three";

class SubjectManager {
  constructor(scene) {
    this.scene = scene;

    this.init();
  }

  init() {
    this.createBox();
    this.createCylinder();
    this.createSphere();
  }

  createBox() {
    let height = 5;
    let width = 5;
    let depth = 5;
    var geometry = new THREE.BoxGeometry(height, width, depth);
    var material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

    cube.position.y = height / 2;
    this.scene.add(cube);
  }

  createCylinder() {
    let height = 5;
    let radTop = 5;
    let radBot = 5;
    var geometry = new THREE.CylinderGeometry(radTop, radBot, height);
    var material = new THREE.MeshPhongMaterial({ color: 0xff0000});
    var cube = new THREE.Mesh(geometry, material);

    cube.position.y = height / 2;
    cube.position.z = 13;
    this.scene.add(cube);
  }

  createSphere(){
    let radius = 5;

    var geometry = new THREE.SphereGeometry( radius, 32, 32 );
    var material = new THREE.MeshPhongMaterial( {color: 0x0000ff} );
    var sphere = new THREE.Mesh( geometry, material );

    sphere.position.y = radius;
    sphere.position.z = -13;
    this.scene.add( sphere );
  }
}

export { SubjectManager };
