import React from 'react';
import axios from 'axios';

const { useState } = React;

const Form = props => {
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        props.newCard(res.data)
        setUsername('')
      })
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={username}
      onChange={e => setUsername(e.target.value)}
      placeholder="Github Username" required
      />
      <button>Add Card</button>
    </form>
  )
};

export default Form;
