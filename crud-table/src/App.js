import React from 'react';
import UserTable from './containers/UserTable';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Simple CRUD app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Character</h2>
        </div>
        <div className="flex-large">
          <h2>View Characters</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default App;
