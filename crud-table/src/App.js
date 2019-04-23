import React, { useState } from 'react';
import UserTable from './containers/UserTable';
import './index.css';

const App = () => {
  const usersData = [
    { id: '1', name: 'Jason Voorhees', franchise: 'Friday the 13th' },
    { id: '2', name: 'Freddy Krueger', franchise: 'A nightmare on elm street' },
    { id: '3', name: 'Micheal Myers', franchise: 'Halloween' }
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>Simple CRUD app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Character</h2>
        </div>
        <div className="flex-large">
          <h2>View Characters</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App;
