export function createSphere(){
  let radius = 5;

  let x = 0;
  let y = radius;
  let z = 0;

  return{
    type: 'ADD_SPHERE',
    radius: radius,
    x: x,
    y: y,
    z: z,
  };
}


export function createBox(){
  let height = 10;
  let width = 10;
  let depth = 10;

  let x = 0;
  let y = height / 2;
  let z = 0;

  return{
    type: 'ADD_BOX',
    height: height,
    width: width,
    depth: depth,
    x: x, 
    y: y,
    z: z,
  };
}


export function createCylinder(){
  let height = 10;
  let radius = 5;

  let x = 0;
  let y = height / 2;
  let z = 0;

  return{
    type: 'ADD_CYLINDER',
    height: height,
    radius: radius,
    x: x,
    y: y,
    z: z,
  };
}


/* Function to modify the shapes */
export function updateShapeProperties(newVal){
  return {
    type: 'UPDATE_SHAPE_PROPERTY',
    id: newVal.id,
    newVal: newVal.newVal,
    property: newVal.property
  };
}

export function deleteItem(id){
  return{
    type: 'DELETE_ITEM',
    id: id,
  };

}