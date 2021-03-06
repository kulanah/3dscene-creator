import { combineShapes } from "../action/actionCreators";

const color = '#003c8f';

let addComboToCombo = function(destination, source){
  let newCombo = {...destination};

  for (let sourceItem in source.items){
    newCombo.items.push(sourceItem);
  }

  return newCombo;
};

let createNewItem = function(item1, item2){
  let newItem = {
    type: 'combo',
    color:  item1.color,
    selected: false,
    items: [],
  };

  if (item1.type === 'combo'){
    addComboToCombo(item1, newItem);
  } else {
    newItem.items.push(item1);
  }

  if (item2.type === 'combo'){
    addComboToCombo(item2, newItem);
  } else {
    newItem.items.push(item2);
  }

  if (item1.id > item2.id){
    newItem.id = item2.id;
  } else {
    newItem.id = item1.id;
  }

  return newItem;
};

let combineShapesInState = function(state, action){
  console.log(action);
  let newItem = createNewItem(action.shape1, action.shape2);
  let filteredState = [...state.filter(item => {
    if (item.id === action.shape1.id || item.id === action.shape2.id) 
      return null; 
    else 
      return item;
  })];

  let newState = [...filteredState.slice(0, newItem.id)];
  newState.push(newItem);
  newState = [...newState, ...filteredState.slice(newItem.id + 1, Number(filteredState.length))];

  newState = newState.map((item, index) => {
    let newItem = {...item};
    newItem.id = index;
    return newItem;
  });
  
  return newState;
};

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
      return combineShapesInState(state, action);
    default: 
      return state;
  }
};

export { itemList };