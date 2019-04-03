import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};
  componentDidMount() {
    this.hello()
}

hello = () => {
    fetch('/api/hello')
        .then(response => response.text())
        .then(message => {
            this.setState({message: message});
        });
};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.message}</h1>
          
        </header>
      </div>
    );
  }
}

export default App;
