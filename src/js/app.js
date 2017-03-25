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
      canSubmit: false,
      userDetails: {},
    }
    this.renderForm = this.renderForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit() {
    console.log("here is data", this.state.userDetails)
  }

  handleInputChange(field) {
    return event => 
      this.setState({
        userDetails: {
          ...this.state.userDetails,
          [field]: event.target.value,
        }
      })
  }

  renderForm() {
    return (
      <Formsy.Form
        onSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        className="form"
      >
        <input 
          onChange={this.handleInputChange('firstName')}
          className="input" 
          placeholder="First name"
        />
        <input 
          onChange={this.handleInputChange('lastName')}
          className="input" 
          placeholder="Last name" 
        />
        <input 
          onChange={this.handleInputChange('email')}
          className="input" 
          placeholder="Email"
          validations="isEmail"
          validationError="A valid email is required"
          required
        />
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
