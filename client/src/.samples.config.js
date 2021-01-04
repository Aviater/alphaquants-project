// Identify environment for Okta redirectUri
var redirect;
switch(window.location.hostname) {
  case 'alpha-staging.herokuapp.com':
    redirect = 'https://alpha-staging.herokuapp.com/implicit/callback';
    break;
  case 'localhost':
    redirect = 'http://localhost:8080/implicit/callback';
    break;
  case 'dashboard.alphaquants.io':
    redirect = 'https://dashboard.alphaquants.io/implicit/callback';
    break;
}

// Okta
export default {
  oidc: {
    clientId: '0oaimajbuHLjcwlWS356',
    issuer: 'https://dev-519966.okta.com/oauth2/default',
    redirectUri: redirect,
    scope: 'openid profile email',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};

