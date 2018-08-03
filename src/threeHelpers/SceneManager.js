import * as THREE from 'three';
import GeneralLights from './GeneralLights';
import OrbitControls from 'three-orbitcontrols';
import DragControls from 'three-dragcontrols';

import store from '../store';
import { selectItem, updateShapeProperties } from '../action/actionCreators';
import { SubjectManager } from './SubjectManager';

class SceneManager{
  constructor(canvas, container){

    this.clock = new THREE.Clock();
   
    this.canvas = canvas;
    this.domElement = container;

    this.screenDimensions = {
      width: canvas.width,
      height: canvas.height
    };

    this.scene = this.buildScene();
    this.renderer = this.buildRender(this.screenDimensions);
    this.camera = this.buildCamera(this.screenDimensions);
    this.controls = this.buildControls(this.camera, this.canvas);
    this.sceneSubjects = this.createSceneSubjects(this.scene);

    this.getNormalizedMouseXY = this.getNormalizedMouseXY.bind(this);
    this.selectItem = selectItem;
    this.subjectManager = new SubjectManager(this.scene);

    this.onSceneClick = this.onSceneClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.dragStart = this.dragStart.bind(this)
    this.dragEnd = this.dragEnd.bind(this)
  }
    
  buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#FFF');

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
  }


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
    ];

    return sceneSubjects;
  }

  update(){
    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  resetState(newItems){
    this.subjectManager.resetState(newItems);

    this.dragControls = new DragControls(this.subjectManager.meshArr, this.camera, this.domElement);
    
    this.dragControls.dragstart = function(){};
    this.dragControls.dragend = function(){};
    this.dragControls.addEventListener('dragstart', this.dragStart);
    
    this.dragControls.addEventListener('dragend',this.dragEnd);
  };
  
  dragStart(event){
    this.controls.enabled = false;
  };
  
  dragEnd(event){
    this.controls.enabled = true;
    console.log(event);
    let targetId = event.object.reduxID;
    let x = event.object.position.x;
    let y = event.object.position.y;
    let z = event.object.position.z;

    let updateX = {id: targetId, newVal: x, property: 'x'};
    let updateY = {id: targetId, newVal: y, property: 'y'};
    let updateZ = {id: targetId, newVal: z, property: 'z'};

    store.dispatch(updateShapeProperties(updateX));
    store.dispatch(updateShapeProperties(updateY));
    store.dispatch(updateShapeProperties(updateZ));
  };
  
  onWindowResize(){
    const { width, height } = this.canvas;
    
    this.screenDimensions.width = width;
    this.screenDimensions.height = height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(width, height);
  }

  getNormalizedMouseXY(event){
    let gutters = this.canvas.getBoundingClientRect();
    let mouse = new THREE.Vector2();

    mouse.x = ((event.clientX - gutters.left) / this.canvas.width) * 2 - 1;
    mouse.y = - ((event.clientY - gutters.top)  / this.canvas.height) * 2 + 1;

    return mouse;
  }

  onSceneClick(event){
    let rayCaster = new THREE.Raycaster();
    let mouse = this.getNormalizedMouseXY(event);
    this.camera.updateMatrixWorld();
    
    rayCaster.setFromCamera({x: mouse.x, y: mouse.y} , this.camera);
    
    let intersects = rayCaster.intersectObjects(this.scene.children);

    let selectedObject = intersects.map(item => {
      if (item.object.type === 'Mesh'){
        return item;
      }
      return null;
    });

    if (selectedObject[0]){
      let selectedId = selectedObject[0].object.reduxID;
      store.dispatch(selectItem(selectedId));
    }
  }
}

export { SceneManager };