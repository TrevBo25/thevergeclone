import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div style={{height: "100vh", backgroundColor: "red"}}>
        <Header></Header>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
