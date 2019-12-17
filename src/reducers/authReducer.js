import { SET_CURRENT_USER, USER_LOADING } from '../actions/types';
const isEmpty = require('is-empty');
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
