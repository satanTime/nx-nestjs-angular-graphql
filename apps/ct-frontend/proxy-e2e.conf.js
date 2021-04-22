const PROXY_CONFIG = [
  {
    context: ['/api', '/auth'],
    target: 'http://localhost:4200',
    secure: false,
    bypass: function (req) {
      // console.log('proxy:request', req.path);

      let spec = '';
      try {
        const url = new URL(req.headers.referer);
        spec = url.searchParams.get('e2e-spec');
      } catch (e) {
        // nothing to do
      }

      if (req.method === 'GET' && req.path === '/api') {
        return '/e2e-api/index.json';
      }
      if (req.method === 'POST' && req.path === '/api/gql') {
        req.method = 'GET';
        if (spec === 'user-1') {
          return '/e2e-api/gql-user-simple.json';
        }
        return '/e2e-api/gql-empty.json';
      }

      if (req.path === '/auth/realms/nx-application/protocol/openid-connect/3p-cookies/step1.html') {
        return '/e2e-auth/step1.html';
      }
      if (req.path === '/auth/realms/nx-application/protocol/openid-connect/login-status-iframe.html') {
        return '/e2e-auth/login-status-iframe.html';
      } else if (req.path.startsWith('/auth')) {
        return '/e2e-auth/default.html';
      }
    },
    logLevel: 'debug',
  },
];

module.exports = PROXY_CONFIG;
