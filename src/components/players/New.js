import React from 'react';
import PlayerForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';


class PlayersNew extends React.Component {

  state = {
    errors: {}
  };

  handleChange = ({ target: { name, value }}) => {
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ errors, [name]: value });
  }

  handleSubmit = e => {
    console.log('in Handle Submit', this.state);
    e.preventDefault();
    axios
      .post('/api/teams', this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/teams/:id/${Auth.getPayload().sub}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render(){
    console.log('In playersNew');
    return <PlayerForm
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}
    />;
  }

}

export default PlayersNew;
