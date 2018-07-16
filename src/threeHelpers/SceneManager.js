import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import OrbitControls from 'three-orbitcontrols';

export default canvas => {
  const clock = new THREE.Clock();

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height
  }

  const scene = buildScene();
  const renderer = buildRender(screenDimensions);
  const camera = buildCamera(screenDimensions);
  const controls = buildControls(camera, canvas);
  const sceneSubjects = createSceneSubjects(scene);

  function buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FFF");

    const gridHelper = new THREE.GridHelper(500, 50);
    scene.add(gridHelper);

    return scene;
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    renderer.gammaInput = true;
    renderer.gammaOutput = true; 

    return renderer;
  }

  function buildControls(camera){

    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
    controls.dampingFactor = 1;

    return controls;
  };


  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 0.1;
    const farPlane = 500; 
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

    camera.position.set(40,40,40);
    return camera;
  }

  function createSceneSubjects(scene) {
    const sceneSubjects = [
      new GeneralLights(scene),
      new SceneSubject(scene)
    ];

    return sceneSubjects;
  }

  function update() {
    const elapsedTime = clock.getElapsedTime();

    for(let i=0; i<sceneSubjects.length; i++){
      sceneSubjects[i].update(elapsedTime);
    }

    controls.update();

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    const { width, height } = canvas;
    
    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
  }

  return {
    update,
    onWindowResize,
  }
}