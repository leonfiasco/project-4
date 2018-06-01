import React from 'react';
import axios from 'axios';

class UserShow extends React.Component {

  state = {

  };

  componentDidMount() {
    axios.get('/api/teams') // Teams Index
      .then(teams => this.setState({ teams: teams.data }));
  }

  render() {
    return <div>
      {/*  TODO: Make this element link to the Team show page */}
      {this.state.teams && this.state.teams.map((team, i) =>
        <div key={i}>{team.name} - {team._id}</div>
      )}

    </div>;
  }
}

export default UserShow;
