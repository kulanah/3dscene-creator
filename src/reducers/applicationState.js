let combineItemsState = function(state, action){
  /* 
      if one of the two is below currently selected AND (the other is ==> crrently selected)
        decrement currently selected by 1
      
  */
  let newSelected = state.selectedItem;

  if (state.selectedItem > action.shape1){
    newSelected--;
  }
  if (state.selectedItem > action.shape2){
    newSelected--;
  }
  return {...state, selectedItem: newSelected};
};


let applicationState = function(state = {}, action){
  switch(action.type){
    case 'SELECT_ITEM': 
      return {...state, selectedItem: action.id};

    case 'SELECT_TOOL': 
      return {...state, selectedTool: action.id};

    case 'SELECT_AFTER_COMBINES':
      return combineItemsState(state, action);

    default: 
      return state;
  }
};

export { applicationState };