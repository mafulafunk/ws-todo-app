import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';

function TodosList({ getToDoList, todos, httpState }) {
  function todoList() {
    return todos.map(function(currentTodo, i) {
      return <ToDo todo={currentTodo} key={i} />;
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
  todos: state.todos.list,
  httpState: state.todos.httpState
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
