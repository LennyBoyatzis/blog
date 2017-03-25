import React, { Component } from 'react';
import HeaderBar from './components/header-bar';
import ReactModal from 'react-modal';
import Formsy from 'formsy-react';
import logo from '../logo.svg';
import CloseIcon from '../close-icon.svg';
import '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    }
    this.renderForm = this.renderForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  renderForm() {
    return (
      <Formsy.Form className="form">
        <input className="input" placeholder="First name" />
        <input className="input" placeholder="Last name" />
        <input className="input" placeholder="Email"/>
        <button className="submit" type="submit">Get notified</button>
      </Formsy.Form>
    )
  }

  toggleModal() {
    return this.setState({
      modalIsOpen: !this.state.modalIsOpen, 
    })
  }

  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <HeaderBar 
            toggleModal={this.toggleModal}
          />
        </div>
        {this.props.children}
        <ReactModal 
          isOpen={this.state.modalIsOpen}
          style={{
            overlay: {
             backgroundColor: 'rgba(40,42,54,0.95)',
            },
            content: {
              backgroundColor: 'rgba(255,255,255, 0)',
              border: 'none',
            },
          }}
        >
          <div className="modal-container">
            <img 
              className="close-modal" 
              src={CloseIcon} 
              width="20" 
              alt="Close icon" 
              onClick={() => this.toggleModal()}
            />
            <img src={logo} width="55" alt="Site Logo"/>
            <div className="modal-content">
              <h3>Get notified when new content is added!</h3>
              {this.renderForm()}
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default App;
