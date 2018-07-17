import * as THREE from "three";

class SubjectManager {
  constructor(scene) {
    this.scene = scene;

  }
  
  clearOldState(){
    for(var i = this.scene.children.length - 1; i >= 0; i--){
      this.scene.children[i].remove();
    }

  }

  resetState(newState){
    this.clearOldState();
    this.addStateToScene(newState);
  }

  drawSphere(item){
    let geo = new THREE.SphereGeometry(item.radius, 16, 16);
    let mat = new THREE.MeshPhongMaterial({color: 0xff0000});
    let mesh = new THREE.Mesh(geo, mat);

    mesh.position.y = item.radius;
    this.scene.add(mesh);
    console.log(item);
  }

  drawBox(item){
    let geo = new THREE.BoxGeometry(item.width, item.height, item.depth);
    let mat = new THREE.MeshPhongMaterial({color: 0xff0000});
    let mesh = new THREE.Mesh(geo, mat);

    mesh.position.y = item.height / 2;
    this.scene.add(mesh);
    console.log(item);
  }

  drawCylinder(item){
    let geo = new THREE.CylinderGeometry(item.radius, item.radius, item.height);
    let mat = new THREE.MeshPhongMaterial({color: 0xff0000});
    let mesh = new THREE.Mesh(geo, mat);

    mesh.position.y = item.height / 2;
    this.scene.add(mesh);
    console.log(item);
  }


  addStateToScene(newState){
    for (let i = 0; i < newState.length; ++i){
      let item = newState[i];
      switch(item.type){
        case 'sphere':
          this.drawSphere(item);
        case 'box':
          this.drawBox(item);
        case 'cylinder':
          this.drawCylinder(item);
      }
    }
  }

}

export { SubjectManager };
