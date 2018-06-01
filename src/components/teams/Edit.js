import React from 'react';
import TeamForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';


class TeamsEdit extends React.Component {

  state = {
    errors: {}
  };

  componentDidMount() {
    console.log(`api/teams/${this.props.match.params.id}`);
    axios
      .get(`/api/teams/${this.props.match.params.id}`)
      .then(res => {
        this.setState(res.data);
      });
  }

  handleChange = ({ target: { name, value }}) => {
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ errors, [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios
      .put(`/api/teams/${id}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/teams/${id}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render () {
    return <TeamForm
      team={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}
    />;
  }
}

export default TeamsEdit;
