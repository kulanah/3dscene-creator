import * as THREE from 'three'

export default scene => {    
  // const geom = new THREE.CubeGeometry(10,10,10);
  // const mesh = new THREE.MeshPhongMaterial({color: "#111"});  
  // let cube = new THREE.Mesh(geom, mesh);
  // cube.position.y += 5;

  // scene.add(cube);

  function update() {
    // cube.rotation.y += 0.01;

  }

  return {
    update
  }
}
