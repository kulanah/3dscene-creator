import * as THREE from 'three'

export default scene => {    
  const geom = new THREE.CubeGeometry(10,10,10);
  const mesh = new THREE.MeshBasicMaterial({color: 0xff69a8});  
  let cube = new THREE.Mesh(geom, mesh);

  scene.add(cube);

  function update() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

  }

  return {
    update
  }
}
