import { SET_TODO_LIST, SET_HTTP_STATE } from '../actions/types';
const initialState = {
  list: [],
  httpState: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO_LIST:
      return {
        ...state,
        list: payload
      };
    case SET_HTTP_STATE:
      return {
        ...state,
        httpState: payload
      };
    default:
      return state;
  }
}
