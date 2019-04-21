import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

const { useState } = React;

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  }

  return (
    <>
      <Form newCard={addNewCard} />
      <CardList cards={cards}/>
    </>
  )
};

export default App;
