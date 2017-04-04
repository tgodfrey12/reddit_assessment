'use strict'

module.exports = {
    development: {
        client: 'pg',
        connection: {
            user: 'toby',
            database: 'reddit_assessment'
        },
        debug: 'true',
        pool: {
            min: 2,
            max: 10
        }
    },
    production: {
        client: 'pg',
        connection: {
            database: 'reddit_clone_db',
            user: 'username',
            password: 'password'
        },
        debug: 'true',
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
