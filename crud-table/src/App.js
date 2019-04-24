import React, { useState } from 'react';
import UserTable from './containers/UserTable';
import AddUserForm from './containers/AddUserForm';
import EditUserForm from './containers/EditUserForm';
import './index.css';

const App = () => {
  const usersData = [
    { id: '1', name: 'Jason Voorhees', franchise: 'Friday the 13th' },
    { id: '2', name: 'Freddy Krueger', franchise: 'A nightmare on elm street' },
    { id: '3', name: 'Micheal Myers', franchise: 'Halloween' }
  ];
  const initialFormState = { id: null, name: '', franchise: '' };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUsers = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUsers = id => {
    setUsers(users.filter(user => user.id !== id ));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, franchise: user.franchise });
  };

  const updateUsers = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => user.id === id ? updatedUser : user));
  };

  return (
    <div className="container">
      <h1>Simple CRUD app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
            <h2>Edit Character</h2>
            <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUsers = {updateUsers} />
            </>
          ) : (
            <>
            <h2>Add Character</h2>
            <AddUserForm addUsers={addUsers} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View Characters</h2>
          <UserTable users={users} deleteUsers={deleteUsers} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
