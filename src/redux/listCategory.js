import * as types from './types';

export const addCategory = newCategory => ({
  type: types.ADD_NEW_CATEGORY,
  payload: newCategory,
});

export const initialState = ['f', 1, 2];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_CATEGORY:
      console.log(state);

      return [...state, action.payload];

    default:
      return state;
  }
};
