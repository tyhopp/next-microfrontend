const config = require('configuration/next.config.js')

module.exports = {
  ...config,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app-one/a',
        permanent: false,
      },
    ];
  },
}
