import React, { useState, useEffect } from 'react';

const EditForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!user.name || !user.franchise) return;
    props.updateUsers(user.id, user);
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={onChangeHandler} />
      <label>Franchise</label>
      <input type="text" name="franchise" value={user.franchise} onChange={onChangeHandler} />
      <button>Update character</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditForm;
