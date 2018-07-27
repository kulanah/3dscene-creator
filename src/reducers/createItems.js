const color = '#003c8f';

let createItems = function(state = [], action){
  switch(action.type){
    case 'ADD_SPHERE': 
      return [...state, {
        type: 'sphere',
        radius: action.radius,
        x: action.x,
        y: action.y,
        z: action.z,
        color: color,
        selected: false,
        id: state.length,
      }];

    case 'ADD_CYLINDER':
      return [...state, {
        type: 'cylinder',
        height: action.height, 
        radius: action.radius,
        x: action.x,
        y: action.y,
        z: action.z,
        color: color,
        selected: false,
        id: state.length,
      }];

    case 'ADD_BOX':
      return [...state, {
        type: 'box',
        height: action.height,
        width: action.width,
        depth: action.depth,
        x: action.x,
        y: action.y,
        z: action.z,
        color: color,
        selected: false,
        id: state.length,
      }];
    
    case 'UPDATE_SHAPE_PROPERTY': 
      return state.map(item => 
        item.id === action.id ? {...item, [action.property]: action.newVal} : item);
    
    case 'DELETE_ITEM':
      return [...state].filter(listItem => {
        return listItem.id !== action.id;
      }).map((item, i)=>{
        let newItem = {...item};
        newItem.id = i;
        return newItem;
      });

    case 'SELECT_ITEM': 
      return [...state].map(item => {
        if (item.id == action.id){
          let newItem = {...item};
          newItem.selected = true;
          return newItem;
        } else {
          let newItem = {...item};
          newItem.selected = false;
          return newItem;
        }
      });

    default: 
      return state;
  }
};

export { createItems };