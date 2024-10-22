import React, { Component } from 'react';
import axios from 'axios';

//ToDo: change to function
export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/todos/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_responsible: response.data.todo_responsible,
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onChangeTodoCompleted(e) {
    this.setState({
      todo_completed: !this.state.todo_completed
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };
    console.log(obj);
    axios
      .put('http://localhost:4000/todos/' + this.props.match.params.id, obj)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/');
        this.props.history.go();
      });
  }

  render() {
    return (
      <div>
        <h3 align='center'>Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className='form-group'>
            <label>Responsible: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className='form-field'>
            <p>
              <label>
                <input
                  type='radio'
                  name='priorityOptions'
                  id='priorityLow'
                  value='Low'
                  checked={this.state.todo_priority === 'Low'}
                  onChange={this.onChangeTodoPriority}
                />
                <span>Low</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type='radio'
                  name='priorityOptions'
                  id='priorityMedium'
                  value='Medium'
                  checked={this.state.todo_priority === 'Medium'}
                  onChange={this.onChangeTodoPriority}
                />
                <span>Medium</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type='radio'
                  name='priorityOptions'
                  id='priorityHigh'
                  value='High'
                  checked={this.state.todo_priority === 'High'}
                  onChange={this.onChangeTodoPriority}
                />
                <span>High</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type='checkbox'
                  name='completedOptions'
                  id='completedCheckbox'
                  value={this.state.todo_completed}
                  checked={this.state.todo_completed}
                  onChange={this.onChangeTodoCompleted}
                />
                <span>Completed</span>
              </label>
            </p>
          </div>
          <br />

          <div className='form-group'>
            <input
              type='submit'
              value='Update Todo'
              className='btn btn-large waves-effect waves-light hoverable accent-3'
            />
          </div>
        </form>
      </div>
    );
  }
}
