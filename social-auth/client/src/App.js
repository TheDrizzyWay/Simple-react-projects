import React from 'react';
import io from 'socket.io-client';
import OAuth from './components/Oauth';
import { apiUrl } from './config';
import './App.css';

// const socket = io(apiUrl);
const providers = ['google', 'github'];

const App = () => {
  return (
    <div className='wrapper'>
        <div className='container'>
          {providers.map(provider => 
            <OAuth 
              provider={provider}
              key={provider}
              // socket={socket}
            />
          )}
        </div>
    </div>
  );
}

export default App;
