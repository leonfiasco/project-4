import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'bulma';
import './scss/style.scss';

import Navbar from './components/Navbar';
import Home from './components/Home';


// import TeamsIndex from './components/teams/Index';
import UserShow from './components/users/Show';
import TeamsNew from './components/teams/New';
import TeamShow from './components/teams/Show';
import TeamsEdit from './components/teams/Edit';
import TeamsIndex from './components/teams/Index';

import PlayersNew from './components/players/New';
import PlayersIndex from './components/players/Index';

import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';

import SecureRoute from './components/common/SecureRoute';

class App extends React.Component {

  state = {
    message: 'I am the state message'
  }

  render(){
    return (
      <Router>
        <main>
          <Navbar />

          {/* Give me something different depending on the URL */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={AuthLogin} />
            <Route exact path="/register" component={AuthRegister} />
            <SecureRoute exact path="/teams" component={TeamsIndex} />
            <SecureRoute exact path="/users" component={UserShow} />
            <SecureRoute exact path="/teams/new" component={TeamsNew} />
            <SecureRoute exact path="/teams/:id" component={TeamShow} />
            <SecureRoute exact path="/players/new" component={PlayersNew} />
            <SecureRoute exact path="/players" component={PlayersIndex} />
            <SecureRoute exact path="/teams/:id/edit" component={TeamsEdit}/>
          </Switch>
        </main>
      </Router>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
