import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/login', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
        this.setState({ user: res.data.user });
      })
      .then(() => this.props.history.push(`/users/${this.state.user._id}`))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid Credentials');
        this.props.history.replace('/login');
      });
  }

  render() {
    return (




      <div className="columns">

        <div className="column is-one-third"></div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
            Login
              </p>
            </header>
            <div className="card-content">
              <div className="content">


                <div className="field" onSubmit={this.handleSubmit}>
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" onChange={this.handleChange}></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field" onSubmit={this.handleSubmit}>
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" onChange={this.handleChange}></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>


              </div>
            </div>
            <footer className="card-footer">
              <div className="columns">
                <div className="column is-one-third"></div>
                <div className="column">
                  <button className="logbutt button is-link">Login</button>
                </div>
                <div className="column"></div>
              </div>
            </footer>
          </div>
        </div>
        <div className="column"></div>

      </div>

      


    );
  }
}

export default AuthLogin;
