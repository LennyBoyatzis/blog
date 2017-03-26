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
      isLoading: false,
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
    this.setState({ isLoading: true });
    const { firstName, lastName, email } = this.state.userDetails;
    fetch('https://qs82ztnbpg.execute-api.us-east-1.amazonaws.com/dev/users/create', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(response => {
        this.setState({
          loading: false,
          modalIsOpen: false,
        })
      })
    .catch(error => console.log("error", error))
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
    const { isLoading } = this.state;
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
          tabIndex={1}
        />
        <input 
          onChange={this.handleInputChange('lastName')}
          className="input" 
          placeholder="Last name" 
          tabIndex={2}
        />
        <input 
          onChange={this.handleInputChange('email')}
          className="input" 
          placeholder="Email"
          required
          tabIndex={3}
        />
        <button className="submit" type="submit">{ isLoading ? 'Submitting...' : 'Get notified'}</button>
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
          contentLabel={''}
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
