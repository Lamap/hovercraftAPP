import * as React from 'react';
import './App.css';
import Bela from './components/bela';

const logo = require('./minion.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to hovercraft</h1>
        </header>
        <Bela name="jenő" />
      </div>
    );
  }
}

export default App;
