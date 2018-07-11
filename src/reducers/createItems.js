let createItems = function(state = [], action){
  switch(action.type){
    case 'ADD_SPHERE': 
      return [...state, {
        height: action.height,
        width: action.width,
      }];
    case 'ADD_CYLINDER':
      return [...state, {
        height: action.height, 
        radius: action.radius,
      }];

    case 'ADD_BOX':
      return [...state, {
        height: action.height,
        width: action.width,
        length: action.length,
      }]
    default: 
      return state;
  }
}

export { createItems }