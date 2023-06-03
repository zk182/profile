import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import Footer from './components/Footer';
import { Avatar } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Avatar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
