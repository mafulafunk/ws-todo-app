import axios from 'axios';
import { SET_TODO_LIST } from './types';

export const getToDoList = () => dispatch => {
  axios.defaults.headers.common['Authorization'] = localStorage.jwtToken;
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:4000/todos/');
      dispatch(setToDoList(response.data));
      // sethttpState(response.status);
      console.log('Status :' + response.status);
    } catch (error) {
      console.log('Status :' + error.response.status);
    }
  }
  fetchData();
};

export const setToDoList = decoded => {
  return {
    type: SET_TODO_LIST,
    payload: decoded
  };
};
