import * as THREE from 'three';
import store from '../store';

const ThreeBSP = require('threebsp.js')(THREE);

class SubjectManager {
  constructor(scene) {
    this.scene = scene;

    this.meshArr = [];
    this.boundingMaterial = new THREE.MeshBasicMaterial({color: 0x00ff04, wireframe: true});
    this.combinedObject = null;
  }

  combineShapes(){
    let bsp1 = new ThreeBSP(this.meshArr[0]);
    let bsp2 = new ThreeBSP(this.meshArr[1]);

    this.combinedObject = bsp1.subtract(bsp2).toMesh();
    this.combinedObject.material = new THREE.MeshPhongMaterial({color: 0xff69f4});

    this.scene.add(this.combined);

  }
  
  clearOldState(){
    while(this.meshArr[0]){
      this.scene.remove(this.meshArr.shift());
    }
    if (this.selectedMesh){
      this.scene.remove(this.selectedMesh);
      this.selectedMesh = '';
    }
  }

  resetState(newState){
    this.clearOldState();
    this.addStateToScene(newState);
  }

  drawBoxBounding(item){
    let boundingGeo = new THREE.BoxGeometry(item.width, item.height, item.depth, 4, 4, 4);

    let boundingMesh = new THREE.Mesh(boundingGeo, this.boundingMaterial);

    boundingMesh.reduxID = item.id;
    
    boundingMesh.position.x = item.x;
    boundingMesh.position.y = item.y;
    boundingMesh.position.z = item.z;

    this.scene.add(boundingMesh);
    this.selectedMesh = boundingMesh;
  }

  drawCylinderBounding(item){
    let boundingGeo = new THREE.CylinderGeometry(item.radius, item.radius, item.height, 24, 1);

    let boundingMesh = new THREE.Mesh(boundingGeo, this.boundingMaterial);

    boundingMesh.reduxID = item.id;
    
    boundingMesh.position.x = item.x;
    boundingMesh.position.y = item.y;
    boundingMesh.position.z = item.z;

    this.scene.add(boundingMesh);
    this.selectedMesh = boundingMesh;
  }

  drawSphereBounding(item){
    let boundingGeo = new THREE.SphereGeometry(item.radius, 16, 16);

    let boundingMesh = new THREE.Mesh(boundingGeo, this.boundingMaterial);

    boundingMesh.reduxID = item.id;
    
    boundingMesh.position.x = item.x;
    boundingMesh.position.y = item.y;
    boundingMesh.position.z = item.z;

    this.scene.add(boundingMesh);
    this.selectedMesh = boundingMesh;

  }

  drawSphere(item){
    let geo = new THREE.SphereGeometry(item.radius, 16, 16);
    let shapeMaterial = new THREE.MeshPhongMaterial({color: item.color});
    let mesh = new THREE.Mesh(geo, shapeMaterial);
    
    mesh.position.x = item.x;
    mesh.position.y = item.y;
    mesh.position.z = item.z;

    mesh.reduxID = item.id;

    this.scene.add(mesh);
    this.meshArr.push(mesh);
  }

  drawBox(item){
    let geo = new THREE.BoxGeometry(item.width, item.height, item.depth);
    let shapeMaterial = new THREE.MeshPhongMaterial({color: item.color});
    let mesh = new THREE.Mesh(geo, shapeMaterial);
    
    mesh.reduxID = item.id;
    
    mesh.position.x = item.x;
    mesh.position.y = item.y;
    mesh.position.z = item.z;

    this.scene.add(mesh);
    this.meshArr.push(mesh);

    console.log(mesh);
    console.log(geo);
  }

  drawCylinder(item){
    let geo = new THREE.CylinderGeometry(item.radius, item.radius, item.height);
    let shapeMaterial = new THREE.MeshPhongMaterial({color: item.color});
    let mesh = new THREE.Mesh(geo, shapeMaterial);
    
    mesh.reduxID = item.id;

    mesh.position.x = item.x;
    mesh.position.y = item.y;
    mesh.position.z = item.z;

    this.scene.add(mesh);
    this.meshArr.push(mesh);
  }

  addStateToScene(newState){
    let state = store.getState(); 
    let selectedNum = state.applicationState.selectedItem;


    if (this.combinedObject){
      this.scene.remove(this.combinedObject);
      this.scene.add(this.combinedObject);
    }
    for (let i = 0; i < newState.length; ++i){
      let item = newState[i];

      switch(item.type){
        case 'sphere':
          this.drawSphere(item);
          if (i === selectedNum){
            this.drawSphereBounding(item);
          }
          break;

        case 'box':
          this.drawBox(item);
          if (i === selectedNum){
            this.drawBoxBounding(item);
          }
          break;

        case 'cylinder':
          this.drawCylinder(item);
          if (i === selectedNum){
            this.drawCylinderBounding(item);
          }
          break;

        default:
          break;
      }
    }
  }
}

export { SubjectManager };
