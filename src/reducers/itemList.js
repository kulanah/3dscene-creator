const color = '#003c8f';

let itemList = function(state = [], action){
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
        segmentX: action.segmentX,
        segmentY: action.segmentY,
        segmentZ: action.segmentZ,
        id: state.length,
      }];
    
    case 'UPDATE_SHAPE_PROPERTY': 
      return state.map(item => 
        item.id === action.id ? {...item, [action.property]: action.newVal} : item);
    
    case 'DELETE_ITEM':
      return [...state].filter(listItem => {
        return listItem.id !== action.id;
      }).map((item, i) => {
        let newItem = {...item};
        newItem.id = i;
        return newItem;
      });

    case 'UPDATE_SHAPE_POSITION':
      return[...state].map(item =>
        item.id === action.id ? {...item, x: action.newX, y: action.newY, z: action.newZ} : item);

    case 'UPDATE_SEGMENT_X':
      return [...state].map(item => 
        item.id === action.id ? {...item, segmentX: action.newVal} : item);
   
    case 'UPDATE_SEGMENT_Y':
      return [...state].map(item => 
        item.id === action.id ? {...item, segmentY: action.newVal} : item);
   
    case 'UPDATE_SEGMENT_Z':
      return [...state].map(item => 
        item.id === action.id ? {...item, segmentZ: action.newVal} : item);
   
    default: 
      return state;
  }
};

export { itemList };