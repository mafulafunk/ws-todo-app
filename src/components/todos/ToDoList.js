import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDo from './ToDo';

function TodosList(props) {
  const [todos, setTodos] = useState([]);
  const [httpState, sethttpState] = useState(0);
  const [reloadSwitch, setReloadSwitch] = useState(true);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/todos/');
        setTodos(response.data);
        sethttpState(response.status);
        console.log('Status :' + response.status);
      } catch (error) {
        sethttpState(error.response.status);
        console.log(error);
      }
    }
    fetchData();
  }, [reloadSwitch]);

  async function onDeleteToDo(currentToDo) {
    try {
      const res = await axios.delete(
        'http://localhost:4000/todos/' + currentToDo._id
      );
      console.log(res.data);
      setReloadSwitch(!reloadSwitch);
    } catch (error) {
      console.log(error);
    }
  }

  function todoList() {
    return todos.map(function(currentTodo, i) {
      return <ToDo todo={currentTodo} key={i} onDeleteToDo={onDeleteToDo} />;
    });
  }

  return (
    <div>
      <h3>Todos List</h3>
      {httpState === 401 && <div className='red-text'>401 Unauthorized</div>}
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{todoList()}</tbody>
      </table>
    </div>
  );
}

export default TodosList;
