import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import '../../styles/components/header-bar.css';

class HeaderBar extends Component {
  render() {
    return (
      <div className="headerbar-container">
        <Link to="/">
          <img src={logo} width="55" alt="Site Logo"/>
        </Link>
        <p className="headerbar-text">Python · Machine Learning · AI</p>
        <ul className="headerbar-menu">
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default HeaderBar;


        // <p className="headerbar-text">Python · Machine Learning · AI</p>
