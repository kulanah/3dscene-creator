let applicationState = function(state = {}, action){
  switch(action.type){
    case 'SELECT_ITEM': 
      return {...state, selectedItem: action.id};

    case 'SELECT_TOOL': 
      return {...state, selectedTool: action.id};

    default: 
      return state;
  }
};

export { applicationState };