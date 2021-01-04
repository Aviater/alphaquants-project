import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { checkAuthentication } from './helpers';
import { Redirect } from 'react-router-dom';

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null, userinfo: null };
    this.checkAuthentication = checkAuthentication.bind(this);
    this.login = this.login.bind(this);
  }

  state = {
    redirect: false
  }

  async componentDidMount() {
    this.checkAuthentication();
    this.id = setTimeout(() => {
      this.setState({redirect: true})
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  render() {

    return this.state.redirect
      ? <Redirect to="/dashboard" />
      : <div></div>
  }
});
