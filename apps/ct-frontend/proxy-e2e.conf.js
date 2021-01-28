const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:4200',
    secure: false,
    bypass: function (req) {
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
    },
    logLevel: 'debug',
  },
];

module.exports = PROXY_CONFIG;
