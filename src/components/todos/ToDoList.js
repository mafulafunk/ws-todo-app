import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDo from './ToDo';
import { connect } from 'react-redux';
import { getToDoList } from '../../actions/todoListActions';

function TodosList({ getToDoList, todos }) {
  const [httpState] = useState(0);
  const [reloadSwitch, setReloadSwitch] = useState(true);

  useEffect(() => {
    getToDoList();
  }, [getToDoList]);

  async function onDeleteToDo(currentToDo) {
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

  function todoList() {
    console.log('foo :' + todos);
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

const mapStateToProps = state => ({
  todos: state.todos.list
});

const mapDispatchToProps = { getToDoList };

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);