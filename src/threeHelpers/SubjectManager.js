import * as THREE from 'three';

class SubjectManager {
  constructor(scene) {
    this.scene = scene;
    this.meshArr = [];
  }
  
  clearOldState(){
    while(this.meshArr[0]){
      this.scene.remove(this.meshArr.shift());
    }
  }

  resetState(newState){
    this.clearOldState();
    this.addStateToScene(newState);
  }

  drawSphere(item){
    let geo = new THREE.SphereGeometry(item.radius, 16, 16);
    let mat = new THREE.MeshPhongMaterial({color: 0x003c8f});
    let mesh = new THREE.Mesh(geo, mat);

    mesh.position.y = item.radius;
    this.scene.add(mesh);
    this.meshArr.push(mesh);
  }

  drawBox(item){
    let geo = new THREE.BoxGeometry(item.width, item.height, item.depth);
    let mat = new THREE.MeshPhongMaterial({color: 0x003c8f});
    let mesh = new THREE.Mesh(geo, mat);

    mesh.position.y = item.height / 2;
    this.scene.add(mesh);
    this.meshArr.push(mesh);
  }

  drawCylinder(item){
    let geo = new THREE.CylinderGeometry(item.radius, item.radius, item.height);
    let mat = new THREE.MeshPhongMaterial({color: 0x003c8f});
    let mesh = new THREE.Mesh(geo, mat);

    mesh.position.y = item.height / 2;
    this.scene.add(mesh);
    this.meshArr.push(mesh);
  }


  addStateToScene(newState){
    for (let i = 0; i < newState.length; ++i){
      let item = newState[i];

      switch(item.type){
        case 'sphere':
          this.drawSphere(item);
          break;

        case 'box':
          this.drawBox(item);
          break;

        case 'cylinder':
          this.drawCylinder(item);
          break;

        default:
          break;
      }
    }
  }
}

export { SubjectManager };
