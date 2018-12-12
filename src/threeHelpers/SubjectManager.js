import * as THREE from 'three';
import store from '../store';

const ThreeBSP = require('threebsp.js')(THREE);

class SubjectManager {
  constructor(scene) {
    this.scene = scene;

    this.meshArr = [];
    this.boundingMaterial = new THREE.MeshBasicMaterial({color: 0x00ff04, wireframe: true});
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

  drawCombo(item){
    let positionOffsets = {x: -item.x, y: -item.y, z: -item.z};
    let mesh = createShapeComboGeo(item, positionOffsets);
    this.scene.add(mesh);
    this.meshArr.push(mesh);
  }


  drawComboBounding(item){
    //TODO: Change this to combo code
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
    let mesh = this.createSphereMesh(item);

    this.scene.add(mesh);
    this.meshArr.push(mesh);
  }

  createSphereMesh(item){
    let geo = new THREE.SphereGeometry(item.radius, 16, 16);
    let shapeMaterial = new THREE.MeshPhongMaterial({color: item.color});
    let mesh = new THREE.Mesh(geo, shapeMaterial);
    
    mesh.position.x = item.x;
    mesh.position.y = item.y;
    mesh.position.z = item.z;

    mesh.reduxID = item.id;

    return mesh;
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

  drawBox(item){
    let mesh = createBoxMesh(item);

    this.scene.add(mesh);
    this.meshArr.push(mesh);
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

  createCylinderMesh(item){
    //TODO: convert this from sphere code to cylinder code

    let geo = new THREE.BoxGeometry(item.width, item.height, item.depth);
    let shapeMaterial = new THREE.MeshPhongMaterial({color: item.color});
    let mesh = new THREE.Mesh(geo, shapeMaterial);
    
    mesh.reduxID = item.id;
    
    mesh.position.x = item.x;
    mesh.position.y = item.y;
    mesh.position.z = item.z;

    return mesh;
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

  addStateToScene(newState){
    let state = store.getState(); 
    let selectedNum = state.applicationState.selectedItem;

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
        
        case 'combo':
          this.drawCombo(item);
          if (i === selectedNum){
            //TODO: Uncomment this after implementation of function
            // this.drawComboBounding(item);
          }
          break;

        default:
          break;
      }
    }
  }
}

let createShapeComboGeo = function(item, positionOffset){
  let combineGeo;
  let meshes = [];

  for (let shape in item.items){
    let offsetShape = {...item.items[shape]};
    offsetShape.x -= positionOffset.x;
    offsetShape.y -= positionOffset.y;
    offsetShape.z -= positionOffset.z;

    switch (offsetShape.type){
      case 'box':
        meshes.push(createBoxMesh(offsetShape));
        break;

      case 'sphere': 
        meshes.push(SubjectManager.createSphereMesh(offsetShape));
        break;

      case 'cylinder':
        //TODO: create function as above two options, such that this doesn't break the program 
        break;

      default:
        break;
    }
  }

  combineGeo = new ThreeBSP(meshes[0]);

  for (let i = 1; i < meshes.length; i++){
    let bsp = new ThreeBSP(meshes[i]);
    combineGeo = combineGeo.union(bsp);
  }

  combineGeo = combineGeo.toMesh();
  combineGeo.material = new THREE.MeshPhongMaterial({color: new THREE.Color(item.items[0].color)});

  combineGeo.reduxID = item.id;
  return combineGeo;
};

let createBoxMesh = function(item){
  let geo = new THREE.BoxGeometry(item.width, item.height, item.depth);
  let shapeMaterial = new THREE.MeshPhongMaterial({color: item.color});
  let mesh = new THREE.Mesh(geo, shapeMaterial);
  
  mesh.reduxID = item.id;
  
  mesh.position.x = item.x;
  mesh.position.y = item.y;
  mesh.position.z = item.z;

  return mesh;
};

export { SubjectManager };
export { createShapeComboGeo };