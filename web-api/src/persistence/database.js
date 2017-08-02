const knexPg = require('knex')({
  client: "pg",
  connection: 'postgres://admin:admin@1.1.1.1/pdvreports',
  pool: {
    min: 2,
    max: 10
  },
  debug: false
});

exports.knexPg = knexPg;