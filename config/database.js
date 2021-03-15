const parseDBUrl = require('parse-database-url')


module.exports = ({ env }) => {
  const { host, database, user, password, driver, port } = parseDBUrl(env('DATABASE_URL'))

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: driver,
          host,
          port,
          database,
          username: user,
          password,
          ssl: { "rejectUnauthorized": false }
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  }
};
