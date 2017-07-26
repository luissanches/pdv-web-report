const knexPg = require('knex')({
  client: "pg",
  connection: 'postgres://admin:286692@45.76.157.69:5432/pdvreports',
  pool: {
    min: 2,
    max: 10
  },
  debug: false
});

var knexSqlite = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '/home/projects/bolaria/Pdv/Misc/db.sl3'
  }
});

exports.knexPg = knexPg;
exports.knexSqlite = knexSqlite;
// /home/luis/Projects/bolaria/Pdv/Misc
//C:\\Repositories\\bolaria\\Pdv\\Misc\\db.sl3
//D:\Sistema\pdv\data\db.sl3
//Users/biro/Projects/syslaps/bolaria/Pdv/Misc/db.sl3
//../../misc/db.sl3
//connection: 'postgres://psf-user:ornit0quatro@127.0.0.1/pdvreports',
//connection: 'postgres://admin:286692@45.76.157.69:5432/pdvreports',
