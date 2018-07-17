let currentID = -1;
export function createSphere(){
  console.log('inside action create sphere');
  currentID += 1;
  return{
    type: 'ADD_SPHERE',
    radius: 10,
    id: currentID,
  }
}

export function createBox(){
  console.log('inside action create box');
  currentID += 1;
  return{
    type: 'ADD_BOX',
    height: 10,
    width: 10,
    depth: 10,
    id: currentID,
  }
}

export function createCylinder(){
  console.log('inside action create cylinder');
  currentID += 1;
  return{
    type: 'ADD_CYLINDER',
    height: 10,
    radius: 5,
    id: currentID,
  }
}

export function createCone(){
  console.log('inside action create cone');
  currentID += 1;
  return{
    type: 'ADD_CONE',
    height: 1,
    radius: 1,
    id: currentID,
    radialSegments: 3,
  }
}
/* Function to modify the shapes */
export function updateShapeProperties(newVal){
  return {
    type: 'UPDATE_SHAPE_PROPERTY',
    id: newVal.id,
    newVal: newVal.newVal,
    property: newVal.property
  }
}