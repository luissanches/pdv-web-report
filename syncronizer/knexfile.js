module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'bolaria',
      user: 'admin',
      password: '286692'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations/'
    }
  },
  staging: {
  },
  production: {
    client: 'postgresql',
    connection: {
      host: '45.76.157.69',
      database: 'pdvreports',
      user: 'admin',
      password: '286692'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations/'
    }
  }
};
