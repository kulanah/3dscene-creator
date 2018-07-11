let createItems = function(state = [], action){
  switch(action.type){
    case 'ADD_SPHERE': 
      console.log(state);
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
      }]
    default: 
      return state;
  }
}

export { createItems }