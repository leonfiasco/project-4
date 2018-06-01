import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';

class Navbar extends React.Component {

  state = {
    navIsOpen: false
  }

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="http://static.tumblr.com/cde3f5aaae120ad6cdc7c5658c86f455/hhnpikc/yyUnb7au5/tumblr_static_3kg9egqcqvwg08cowwk4cgogw.png" width="112" />
          </Link>
          <a role="button" className={`navbar-team ${this.state.navIsOpen? 'is-active' : ''}`} onClick={this.handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/teams" className="navbar-item">View Teams</Link>
            <Link to="/teams/new" className="navbar-item">Add A Team</Link>
            {Auth.isAuthenticated() && <Link to="/players/new" className="navbar-item">Add a Player</Link>}
            {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
            {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}

            {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`} className="navbar-item">Profile</Link>}

          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
