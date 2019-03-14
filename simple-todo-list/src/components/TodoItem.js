import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class TodoItem extends Component {
  toggleStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todo-div" style={this.toggleStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>
        {' '}
        { title }
        <button className="delete-btn" onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
