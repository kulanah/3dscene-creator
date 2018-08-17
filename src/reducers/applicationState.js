let applicationState = function(state = {}, action){
  switch(action.type){
    case 'SELECT_ITEM': 
      return {...state, selectedItem: action.id};

    case 'SELECT_TOOL': 
      return {...state, selectedTool: action.id};

    case 'UPDATE_SELECTED_SEGMENT_X':
      if (action.newVal >  0){
        return {...state, selectedX: action.newVal};
      } else {
        return state;
      }

    case 'UPDATE_SELECTED_SEGMENT_Y':
      if (action.newVal > 0){
        return {...state, selectedY: action.newVal};
      } else { 
        return state;
      }

    case 'UPDATE_SELECTED_SEGMENT_Z':
      if (action.newVal > 0){
        return {...state, selectedZ: action.newVal};
      } else { 
        return state;
      }


    default: 
      return state;
  }
};

export { applicationState };