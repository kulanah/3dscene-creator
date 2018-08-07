import { combineReducers } from 'redux';

import { itemList } from './itemList';
import { applicationState } from './applicationState';

const rootReducer = combineReducers({
  itemList, 
  applicationState,
});

export default rootReducer;