import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PlayersIndex extends React.Component {
  state = {
    players: []
  }


  componentDidMount() {
    axios
      .get('/api/players')
      .then(res => this.setState({ players: res.data}));
  }


  render() {
    return(
      <div>

        <div className="columns is-multiline">
          {this.state.players.map(player =>
            <div className="column is-one-third-desktop is-half-tablet" key={player._id}>
              <Link to={`/players/${player._id}`}>
                <div className="card">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${player.image})` }}
                  ></div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{player.name}</p>

                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlayersIndex;
