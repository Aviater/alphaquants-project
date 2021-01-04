/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Container, Icon, Image, Menu } from 'semantic-ui-react';
import { checkAuthentication } from './helpers';

export default withAuth(class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      authenticated: null
    };

    this.checkAuthentication = checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    this.checkAuthentication(); 
  }

  async componentDidUpdate(prevProps) {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/');
  }

  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header href="/">
              <Image id="logo" size="mini" src="/img/alphaquants-logo2.png" />
              &nbsp;
              
            </Menu.Item>
            {this.state.authenticated === true && <Menu.Item id="profile-button" as="a" href="/dashboard">Dashboard</Menu.Item>}
            {this.state.authenticated === true && this.props.adminAuth === true ? <Menu.Item id="admin-button" as="a" href="/admin">Admin</Menu.Item> : null}
            {this.state.authenticated === true && <Menu.Item id="logout-button" as="a" onClick={this.logout}>Logout</Menu.Item>}
            {this.state.authenticated === false && <Menu.Item as="a" onClick={this.login}>Login</Menu.Item>}
          </Container>
        </Menu>
      </div>
    );
  }
});
