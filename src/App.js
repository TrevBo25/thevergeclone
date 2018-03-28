import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import TopSeven from './components/TopSeven'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "black", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Header />
        <Nav />
        <TopSeven />
        <Footer />
      </div>
    );
  }
}

export default App;
