import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from './helpers';

import Dashboard from './components/Dashboard/Dashboard';


export default withAuth(class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { userinfo: null, ready: false };
    this.checkAuthentication = checkAuthentication.bind(this);
  }

  async componentDidMount() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async componentDidUpdate() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async applyClaims() {
    if (this.state.userinfo && !this.state.claims) {
      const claims = Object.entries(this.state.userinfo);
      this.setState({ claims, ready: true });
    }
  }

  render() {
    
    return (

      <div className="page-wrapper">

        <Dashboard /> 

      </div>
      
    );
  }
});
