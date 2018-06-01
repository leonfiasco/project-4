import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class TeamShow extends React.Component {

  state = {
    team: null

  };

  componentDidMount() {
    console.log(this.props);
    axios.get(`/api/teams/${this.props.match.params.id}`) // Teams Show
      .then(res => this.setState({ team: res.data }));
  }

  deletePlayer = (playerId) => {
    console.log('hello');
    axios
      .delete(`/api/players/${playerId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        const players = this.state.team.players.filter(player => player._id !== playerId);
        const team = { ...this.state.team, players };
        this.setState({ team });
      });
  }

  render() {
    console.log(this.state);
    if(!this.state.team) return null;
    return(
      <section>
        <div>
          {this.state.team.players.map(player =>
            <article key={player._id} className="media">
              <figure className="media-left">
                <p className="image is-128x128">
                  <img src={player.image} className="pro-image"></img>
                </p>
              </figure>
              <div className="media-content">
                <div className="content">

                  <strong>{player.name}</strong>
                  <p>position: {player.position}</p>
                  <p>Level: {player.level}</p>
                  <p>Age: {player.age}</p>

                  <Link
                    className="button is-primary is-rounded"
                    to={`/teams/${this.state.team._id}/edit`}
                  >Edit</Link>

                  <button className="button is-success is-rounded">Add <i className="fas fa-plus"></i></button>

                  <br></br>

                </div>
              </div>
              <div className="media-right">
                <button className="delete" onClick={() => this.deletePlayer(player._id)}></button>

              </div>
            </article>
          )}
        </div>
      </section>
    );
  }
}

export default TeamShow;
