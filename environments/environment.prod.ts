// environment.ts
export const environment = {
  production: false,
  auth: {
    clientID: 'YOUR-AUTH0-CLIENT-ID',
    domain: 'YOUR-AUTH0-DOMAIN', // e.g., https://you.auth0.com/
    audience: 'YOUR-AUTH0-API-IDENTIFIER', // e.g., http://localhost:8100
    redirect: 'http://localhost:8100/callback',
    scope: 'openid profile email'
  }
}