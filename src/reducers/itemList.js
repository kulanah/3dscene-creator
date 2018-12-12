import { combineShapes, updateShapePosition } from '../action/actionCreators';
import { createShapeComboGeo } from '../threeHelpers/SubjectManager';

const color = '#003c8f';

let retrieveIdNumber = function(items){
  if (items[0].id > items[1].id){
    return items[1].id;
  } else {
    return items[0].id;
  }
};

let addComboToCombo = function(destination, source){
  let newCombo = {...destination};

  for (let sourceItem in source.items){
    newCombo.items.push(sourceItem);
  }

  return newCombo;
};

let addNoncomboToCombo = function(item){
  let newItem = {...item};
  delete newItem.id;
  delete newItem.history;

  return newItem;
};

let createNewItem = function(items){
  let newItem = {
    type: 'combo',
    color:  items[0].color,
    selected: false,
    items: [],
    history: [],
  };

  for (let item in items){
    if (items[item].type === 'combo'){
      newItem.items.push(addComboToCombo(items[item]));
    } else {
      newItem.items.push(addNoncomboToCombo(items[item], newItem));
    }
  }

  newItem.id = retrieveIdNumber(items);

  return newItem;
};

let resetComboPiecePosition = function(items, position){
  for (let item in items){ 
    items[item].x = items[item].x - position.x;
    items[item].y = items[item].y - position.y;
    items[item].z = items[item].z - position.z;
  }
};

let determineNewItemPosition = function(item){
  let geo = createShapeComboGeo(item, {x: 0, y: 0, z: 0});
  item.x = geo.position.x;
  item.y = geo.position.y;
  item.z = geo.position.z;

  let itemPosition = {x: item.x, y: item.y, z: item.z};

  resetComboPiecePosition(item.items, itemPosition);

  item.history = [{x: item.x}, {y: item.y}, {z: item.z}];
  
  return item;
};

let resetIndexes = function(source){
  let newState = source.map((item, index) => {
    let newItem = {...item};
    newItem.id = index;
    return newItem;
  });

  return newState;
};

let combineShapesInState = function(state, action){
  let newItem = createNewItem([action.shape1, action.shape2]);
  let filteredState =  [...state.filter(item => {
    if (item.id === action.shape1.id || item.id === action.shape2.id) 
      return null; 
    else 
      return item;
  })];

  newItem = determineNewItemPosition(newItem);
  

  let newState = [...filteredState.slice(0, newItem.id)];
  newState.push(newItem);
  newState = [...newState, ...filteredState];

  newState = resetIndexes(newState);


  return newState;
};

let updateItemPositionState = function(item, action){
  return {...item,
    x: action.newX, 
    y: action.newY, 
    z: action.newZ,
    history: [ 
      ...item.history, 
      {x: action.newX}, 
      {y: action.newY}, 
      {z: action.newZ}
    ]
  };
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
      return [...state].map(item => 
        item.id === action.id 
          ? updateItemPositionState(item, action) 
          : item);

    case 'COMBINE_SHAPES':
      return combineShapesInState(state, action);
    default: 
      return state;
  }
};

export { itemList };