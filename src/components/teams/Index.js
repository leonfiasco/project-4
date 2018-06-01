import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import _ from 'lodash';


class TeamsIndex extends React.Component {
  state = {
    teams: []
  }

  componentDidMount() {
    axios
      .get('/api/teams')
      .then(res => this.setState({ teams: res.data }));
  }

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // }

  render() {
    return(
      <div>

        <div className="columns is-multiline">
          {this.state.teams.map(team =>
            <div className="column is-one-third-desktop is-half-tablet" key={team._id}>
              <Link to={`/teams/${team._id}`}>
                <div className="card">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${team.image})` }}
                  ></div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{team.name}</p>
                        {/* <p className="title is-4">{team._id}</p> */}

                        {/* <p className="subtitle is-6">{team.location}</p> */}
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

export default TeamsIndex;
