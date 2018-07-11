export function createSphere(){
  console.log('inside action create sphere');
  return{
    type: 'ADD_SPHERE',
    height: 1,
    radius: 1,
  }
}

export function createBox(){
  console.log('inside action create box');
  return{
    type: 'ADD_BOX',
    height: 1,
    width: 1,
    length: 1,
  }
}
export function createCylinder(){
  console.log('inside action create cylinder');
  return{
    type: 'ADD_CYLINDER',
    height: 1,
    radius: 1,
  }
}
