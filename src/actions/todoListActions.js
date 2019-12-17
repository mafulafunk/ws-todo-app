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

export const deleteToDo = currentToDo => dispatch => {
  axios.defaults.headers.common['Authorization'] = localStorage.jwtToken;
  async function deleteIt() {
    try {
      const res = await axios.delete(
        'http://localhost:4000/todos/' + currentToDo._id
      );
      console.log(res.data);
      getToDoList();
    } catch (error) {
      console.log(error);
    }
  }
  deleteIt();
};

export const setToDoList = decoded => {
  return {
    type: SET_TODO_LIST,
    payload: decoded
  };
};
