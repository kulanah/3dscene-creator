let currentID = -1;
export function createSphere(){
  console.log('inside action create sphere');
  currentID += 1;
  return{
    type: 'ADD_SPHERE',
    height: 1,
    radius: 1,
    id: currentID,
  }
}

export function createBox(){
  console.log('inside action create box');
  currentID += 1;
  return{
    type: 'ADD_BOX',
    height: 1,
    width: 1,
    length: 1,
    id: currentID,
  }
}
export function createCylinder(){
  console.log('inside action create cylinder');
  currentID += 1;
  return{
    type: 'ADD_CYLINDER',
    height: 1,
    radius: 1,
    id: currentID,
  }
}

export function updateShapeProperties(newVal){
  return {
    type: 'UPDATE_SHAPE_PROPERTY',
    id: newVal.id,
    newVal: newVal.newVal,
    property: newVal.property
  }
}