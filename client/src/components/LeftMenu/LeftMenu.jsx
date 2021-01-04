import React, { Component } from 'react';

class LeftMenu extends Component {

  idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
  tokenEmail = this.idToken.idToken.claims.email.toLowerCase();

  // Selected option coloring.
  componentDidMount() {
    if(window.location.pathname === '/dashboard') {
      document.querySelector('#portfolio').style.color = '#186386';
    } else if(window.location.pathname === '/admin') {
      document.querySelector('#admin').style.color = '#186386';
    } else if(window.location.pathname === '/backtests') {
      document.querySelector('#backtests').style.color = '#186386';
    } else if(window.location.pathname === '/strategies') {
      document.querySelector('#strategies').style.color = '#186386';
    }
  }
  
  renderAdmin() {
    if(this.tokenEmail === 'benedict.marien@gmail.com' || this.tokenEmail === 'coj@alphaquants.io') {
      return(
        <div>
          <li>
            <a href="/admin" id="admin" className="admin-buttons">
              <div className="pull-left">
                <i className="ti-crown  mr-20"></i>
                <span className="right-nav-text">Admin</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/backtests" id="backtests" className="admin-buttons">
              <div className="pull-left">
                <i className="ti-stats-up  mr-20"></i>
                <span className="right-nav-text">Backtests</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/strategies" id="strategies" className="admin-buttons">
              <div className="pull-left">
                <i className="ti-pulse  mr-20"></i>
                <span className="right-nav-text">Strategies</span>
              </div>
            </a>
          </li>
        </div>
      )
    }
  }

	render() {
		return (
      <div className="fixed-sidebar-left">
  			<ul className="nav navbar-nav side-nav nicescroll-bar">
          <li>
            <a href="/dashboard" id="portfolio"><div className="pull-left"><i className="ti-dashboard  mr-20"></i><span className="right-nav-text">Portfolio</span></div><div className="clearfix"></div></a>
          </li>
          {this.renderAdmin()}

          <li>
            <a href="https://alphaquants.io" target="_blank"><div className="pull-left"><i className="ti-world  mr-20"></i><span className="right-nav-text">Corporate Web</span></div><div className="clearfix"></div></a>
          </li>
        </ul>
      </div>
		)
	}
}

export default LeftMenu;