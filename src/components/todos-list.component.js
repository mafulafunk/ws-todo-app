import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_priority}
    </td>
    <td>
      <Link to={'/todo/edit/' + props.todo._id}>
        <i className='material-icons'>edit</i>
      </Link>
      <Link to={'/todo/edit/' + props.todo._id}>
        <i className='material-icons'>delete_forever</i>
      </Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], httpState: 0 };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    axios
      .get('http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data, httpState: response.status });
        console.log('Status :' + response.status);
      })
      .catch(error => {
        this.setState({ httpState: error.response.status });
        console.log(error);
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        {this.state.httpState === 401 && (
          <div className='red-text'>401 Unauthorized</div>
        )}
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }

  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }
}
