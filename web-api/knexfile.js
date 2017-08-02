module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: '127.0.0.1',
            database: 'pdvreports',
            user: 'admin',
            password: 'admin'
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
            host: '1.1.1.1',
            database: 'pdvreports',
            user: 'admin',
            password: 'admin'
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