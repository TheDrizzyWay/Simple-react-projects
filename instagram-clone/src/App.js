import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Profile from './components/Profile';
import GlobalStyle from './globalStyle';
import './App.css';

const AppWrapper = styled.div`
  background-color: #fafafa;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Profile />
      </AppWrapper>
    </>
  );
};

export default App;
