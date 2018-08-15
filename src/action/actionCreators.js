export function createSphere(obj){
  return{
    type: 'ADD_SPHERE',
    radius: obj.radius,
    x: obj.x,
    y: obj.y,
    z: obj.z,
  };
}


export function createBox(obj){
  return{
    type: 'ADD_BOX',
    height: obj.height,
    width: obj.width,
    depth: obj.depth,
    x: obj.x, 
    y: obj.y,
    z: obj.z,
    segmentX: 5,
    segmentY: 5,
    segmentZ: 5,
  };
}


export function createCylinder(obj){
  return{
    type: 'ADD_CYLINDER',
    height: obj.height,
    radius: obj.radius,
    x: obj.x,
    y: obj.y,
    z: obj.z,
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

export function updateShapePosition(newVal){
  return {
    type: 'UPDATE_SHAPE_POSITION',
    id: newVal.id,
    newX: newVal.newX,
    newY: newVal.newY,
    newZ: newVal.newZ,
  };
}

export function selectItem(id){
  return {
    type: 'SELECT_ITEM',
    id: id,
  };
}

export function selectTool(id){
  return {
    type: 'SELECT_TOOL',
    id: id,
  };
}

export function updateSegmentX(id, newVal){
  return {
    type: 'UPDATE_SEGMENT_X',
    id: id,
    newVal: newVal,
  };
}

export function updateSegmentY(id, newVal){
  return {
    type: 'UPDATE_SEGMENT_Y',
    id: id,
    newVal: newVal,
  };
}

export function updateSegmentZ(id, newVal){
  return {
    type: 'UPDATE_SEGMENT_Z',
    id: id,
    newVal: newVal,
  };
}
