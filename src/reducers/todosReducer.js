import { SET_TODO_LIST } from '../actions/types';
const initialState = {
  list: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO_LIST:
      return {
        ...state,
        list: payload
      };
    default:
      return state;
  }
}
