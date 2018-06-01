import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthRegister extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/register', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
        this.setState({ user: res.data.user });
      })
      .then(() => this.props.history.push(`/users/${this.state.user._id}`))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid Credentials');
        // Replace is used here so not multiple elements of the invalid registration are added to the history array. Or else if the user fails to register many times, you have to press the back button a lot to go back to where you were previously.
        this.props.history.replace('/register');
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            className="input"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
            onChange={this.handleChange}
          />
        </div>
        <button className="button is-primary">Register</button>
      </form>
    );
  }
}

export default AuthRegister;
