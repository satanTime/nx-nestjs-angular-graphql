const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:4200',
    secure: false,
    bypass: function (req) {
      if (req.method === 'GET' && req.path === '/api') {
        return '/e2e-api/index.json';
      }
      if (req.method === 'POST' && req.path === '/api/gql') {
        req.method = 'GET';
        return '/e2e-api/gql-users-empty.json';
      }
    },
    logLevel: 'debug',
  },
];

module.exports = PROXY_CONFIG;
