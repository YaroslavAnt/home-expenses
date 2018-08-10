import * as types from './types';

export const addItem = newItem => ({
  type: types.ADD_NEW_ITEM,
  payload: newItem,
});

export const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_ITEM:
      console.log(state);

      return [...state, action.payload];

    default:
      return state;
  }
};
