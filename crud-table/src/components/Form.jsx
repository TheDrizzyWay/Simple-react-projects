import React, { useState } from 'react';

const Form = props => {
  const initialFormState = { id: null, name: '', franchise: '' };
  const [user, setUser] = useState(initialFormState);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!user.name || !user.franchise) return;
    props.addUsers(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={onChangeHandler} />
      <label>Franchise</label>
      <input type="text" name="franchise" value={user.franchise} onChange={onChangeHandler} />
      <button>Add new character</button>
    </form>
  );
};

export default Form;
