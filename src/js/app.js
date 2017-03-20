import React, { Component } from 'react';
import HeaderBar from './components/header-bar';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <HeaderBar />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
