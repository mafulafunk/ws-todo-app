import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <h3>Create New Todo</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Description: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.todo_description}
                                    onChange={this.onChangeTodoDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>Responsible: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.todo_responsible}
                                    onChange={this.onChangeTodoResponsible}
                                />
                            </div>
                            <div className="form-field">
                                <p>
                                    <label>
                                        <input type="radio"
                                            type="radio"
                                            name="priorityOptions"
                                            id="priorityLow"
                                            value="Low"
                                            checked={this.state.todo_priority === 'Low'}
                                            onChange={this.onChangeTodoPriority}
                                        />
                                        <span>Low</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio"
                                            type="radio"
                                            name="priorityOptions"
                                            id="priorityMedium"
                                            value="Medium"
                                            checked={this.state.todo_priority === 'Medium'}
                                            onChange={this.onChangeTodoPriority}
                                        />
                                        <span>Medium</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio"
                                            name="priorityOptions"
                                            id="priorityHigh"
                                            value="High"
                                            checked={this.state.todo_priority === 'High'}
                                            onChange={this.onChangeTodoPriority}
                                        />
                                        <span>High</span>
                                    </label>
                                </p>
                            </div>

                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button class="btn btn-large waves-effect waves-light hoverable blue accent-3" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}