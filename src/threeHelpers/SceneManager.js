import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import OrbitControls from 'three-orbitcontrols';

class SceneManager{
  constructor(canvas){

    this.clock = new THREE.Clock();
   
    this.canvas = canvas;

    this.screenDimensions = {
      width: canvas.width,
      height: canvas.height
    }
    
    this.scene = this.buildScene();
    this.renderer = this.buildRender(this.screenDimensions);
    this.camera = this.buildCamera(this.screenDimensions);
    this.controls = this.buildControls(this.camera, this.canvas);
    this.sceneSubjects = this.createSceneSubjects(this.scene);

    this.getScene = this.getScene.bind(this);
  }
    
  buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FFF");

    const gridHelper = new THREE.GridHelper(500, 50);
    scene.add(gridHelper);

    return scene;
  }

  buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    renderer.gammaInput = true;
    renderer.gammaOutput = true; 

    return renderer;
  }

  buildControls(camera){

    const controls = new OrbitControls(camera, this.canvas);

    controls.enableDamping = true;
    controls.dampingFactor = 1;

    return controls;
  };


  buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 0.1;
    const farPlane = 500; 
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

    camera.position.set(40,40,40);
    return camera;
  }

  createSceneSubjects(scene) {
    const sceneSubjects = [
      new GeneralLights(scene),
      new SceneSubject(scene)
    ];

    return sceneSubjects;
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();

    for(let i=0; i < this.sceneSubjects.length; i++){
      this.sceneSubjects[i].update(elapsedTime);
    }

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  getScene(){
    return this.scene;
  }

  onWindowResize() {
    const { width, height } = this.canvas;
    
    this.screenDimensions.width = width;
    this.screenDimensions.height = height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(width, height);
  }
}

export { SceneManager } 