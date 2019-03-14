import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input type="text" name="title" placeholder="Add Todo..."
        value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    )
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
