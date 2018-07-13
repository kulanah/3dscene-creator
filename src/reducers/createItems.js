let createItems = function(state = [], action){
  switch(action.type){
    case 'ADD_SPHERE': 
      return [...state, {
        type: 'sphere',
        height: action.height,
        radius: action.radius,
        id: action.id,
      }];

    case 'ADD_CYLINDER':
      return [...state, {
        type: 'cylinder',
        height: action.height, 
        radius: action.radius,
        id: action.id,
      }];

    case 'ADD_BOX':
      return [...state, {
        type: 'box',
        height: action.height,
        width: action.width,
        length: action.length,
        id: action.id,
      }];
    
    case 'ADD_CONE':
      return [...state, {
        type: 'cone',
        height: action.height,
        radius: action.radius, 
        radialSegments: action.radialSegments,
        id: action.id,
      }];

    case 'UPDATE_SHAPE_PROPERTY': 
      let newState = state.map(item => 
        item.id === action.id ? {...item, [action.property]: action.newVal} : item);
      return newState;

    default: 
      return state;
  }
}

export { createItems }