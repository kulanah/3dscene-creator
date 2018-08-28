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
        history: [],
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
        history: [],
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
        history: [],
      }];
    
    case 'UPDATE_SHAPE_PROPERTY': 
      return state.map(item => 
        item.id === action.id
          ? {...item, [action.property]: action.newVal, history: [...item.history, {[action.property]: action.newVal}]} 
          : item);
    
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
        item.id === action.id 
          ? {...item, 
            x: action.newX, 
            y: action.newY, 
            z: action.newZ, 
            history: 
              [...item.history, 
                {x: action.newX}, 
                {y: action.newY}, 
                {z: action.newZ}
              ]}
          : item);

    case 'COMBINE_SHAPES':
      console.log(action);
      return state;
   
    default: 
      return state;
  }
};

export { itemList };