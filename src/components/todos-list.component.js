import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDo from './todos/ToDo';

function TodosList(props) {
  const [todos, setTodos] = useState([]);
  const [httpState, sethttpState] = useState(0);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    axios
      .get('http://localhost:4000/todos/')
      .then(response => {
        setTodos(response.data);
        sethttpState(response.status);
        console.log('Status :' + response.status);
      })
      .catch(error => {
        sethttpState(error.response.status);
        console.log(error);
        console.log(error);
      });
  });

  function onDeleteToDo(currentToDo) {
    axios.delete('http://localhost:4000/todos/' + currentToDo._id).then(res => {
      console.log(res.data);
      const myToDos = [...todos];
      const index = myToDos.indexOf[currentToDo];
      if (index !== -1) {
        myToDos.splice(index, 1);
        setTodos(myToDos);
      }
    });
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
