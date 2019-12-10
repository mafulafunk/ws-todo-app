import React from 'react';
import { Link } from 'react-router-dom';

function ToDo(props) {
  function onClickDelete(e) {
    console.log(props.todo._id);
    props.onDeleteToDo(props.todo);
  }

  return (
    <tr key='props.key'>
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
        <Link to='/'>
          <i className='material-icons' onClick={onClickDelete}>
            delete_forever
          </i>
        </Link>
      </td>
    </tr>
  );
}

export default ToDo;