import * as THREE from 'three';

export default scene => {    
  const lightOut = new THREE.PointLight('#ffffff', 3);
  const ambient = new THREE.AmbientLight('#ffffff', 0.3);

  lightOut.position.set(40,20,40); 

  scene.add(lightOut);
  scene.add(ambient);
};