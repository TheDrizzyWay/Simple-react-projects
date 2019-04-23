import React, { useState } from 'react';
import UserTable from './containers/UserTable';
import AddUserForm from './containers/AddUserForm';
import './index.css';

const App = () => {
  const usersData = [
    { id: '1', name: 'Jason Voorhees', franchise: 'Friday the 13th' },
    { id: '2', name: 'Freddy Krueger', franchise: 'A nightmare on elm street' },
    { id: '3', name: 'Micheal Myers', franchise: 'Halloween' }
  ];

  const [users, setUsers] = useState(usersData);

  const addUsers = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>Simple CRUD app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Character</h2>
          <AddUserForm addUsers={addUsers} />
        </div>
        <div className="flex-large">
          <h2>View Characters</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
