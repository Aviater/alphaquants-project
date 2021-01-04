import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import config from './.samples.config';
import Home from './Home';
import CustomLoginComponent from './Login';
import Navbar from './Navbar';
import Dashboard from './components/Dashboard/Dashboard.layer';
import Admin from './components/Admin/Admin.layer';
import EditUser from './components/Admin/EditUser/EditUser';
import BackTests from './components/BackTests/BackTests';
import Strategies from './components/Strategies/Strategies';

function customAuthHandler({ history }) {
  // Redirect to the /login page that has a CustomLoginComponent
  history.push('/login');
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adminAuth: false
    }
  }

  componentDidMount() {
    // Checks whether to load admin component or not.
    try {
      switch(window.location.pathname) {
        case '/login':
          break;
        case '/implicit/callback':
          break;
        default:
          const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
          const tokenEmail = idToken.idToken.claims.email.toLowerCase();
          
          if(tokenEmail === 'benedict.marien@gmail.com' || tokenEmail === 'coj@alphaquants.io') {
            this.setState({
              adminAuth: true
            });
          }
      }
      
    } catch(err) {
      console.log(`Something went wrong: ${err}`);
      window.location.pathname = '/login';
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Security
            issuer={config.oidc.issuer}
            client_id={config.oidc.clientId}
            redirect_uri={config.oidc.redirectUri}
            onAuthRequired={customAuthHandler}
          >
            <Navbar adminAuth = {this.state.adminAuth}/>
              <Route path="/" exact component={Home} />
              <SecureRoute path="/user/:id" exact component={EditUser} />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route path="/login" component={CustomLoginComponent} />
              <SecureRoute path="/dashboard" component={Dashboard} />
              {this.state.adminAuth === true ? <SecureRoute path="/admin" component={Admin}/> : null}
              {this.state.adminAuth === true ? <SecureRoute path="/backtests" component={BackTests}/> : null}
              {this.state.adminAuth === true ? <SecureRoute path="/strategies" component={Strategies}/> : null}
          </Security>
        </Router>
      </div>
    );
  }
}

export default App;