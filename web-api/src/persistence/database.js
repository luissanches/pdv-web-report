const knexPg = require('knex')({
  client: "pg",
  connection: 'postgres://admin:286692@45.76.157.69/pdvreports',
  pool: {
    min: 2,
    max: 10
  },
  debug: false
});

exports.knexPg = knexPg;


// connection: 'postgres://psf-user:ornit0quatro@127.0.0.1/pdvreports',
