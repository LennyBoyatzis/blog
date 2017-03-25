import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../styles/components/header-bar.css';

class HeaderBar extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <div className="headerbar-container">
        <Link to="/">
          <img src={logo} width="55" alt="Site Logo"/>
        </Link>
        <p className="headerbar-text">Python · ML · AI</p>
        <ul className="headerbar-menu">
          <li>
            <a onClick={() => toggleModal()} className="subscribe-button">Subscribe</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default HeaderBar;
