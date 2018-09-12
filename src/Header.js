import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to this here blog!</h1>
    </header>
  );
}

export default Header;
