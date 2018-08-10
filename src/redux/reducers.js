import { combineReducers } from 'redux';

import * as listItem from './listItem';
import * as currentUser from './currentUser';
import * as listCategory from './listCategory';

export const rootReducer = combineReducers({
  listItem: listItem.reducer,
  currentUser: currentUser.reducer,
  listCategory: listCategory.reducer,
});

export const initialState = {
  listItem: listItem.initialState,
  currentUser: currentUser.initialState,
  listCategory: listCategory.initialState,
};
