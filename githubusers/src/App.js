import React from 'react';
import CardList from './components/CardList';
// import { useState } from 'react';
import './App.css';

const { useState } = React;

const App = () => {
  const [cards, setCards] = useState([]);

  return (
    <>
      <CardList cards={cards}/>
    </>
  )
};

export default App;
