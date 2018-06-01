import React from 'react';
import TeamForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class TeamsNew extends React.Component {

  state = {
    errors: {}
  };


    handleChange = ({ target: { name, value }}) => {
      const errors = { ...this.state.errors, [name]: '' };
      this.setState({ errors, [name]: value });
    }

    handlePlaceChange = ({ formatted_address: address, geometry: {location}}) => {
      this.setState({ address: address, location: location.toJSON() });
    }

    handleSubmit = e => {
      console.log('in Handle Submit');
      e.preventDefault();
      axios
        .post('/api/teams', this.state, {
          headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
        .then(() => this.props.history.push(`/users/${Auth.getPayload().sub}`))
        .catch(err => this.setState({errors: err.response.data.errors}));
    }

    render(){
      return <TeamForm
        team={this.state}
        handleChange={this.handleChange}
        handlePlaceChange={this.handlePlaceChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />;
    }
}

export default TeamsNew;
