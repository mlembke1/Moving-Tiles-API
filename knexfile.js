'use strict';

module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/tiles'
  },
  production: {
      client: 'pg',
      connection: 'postgresql-shallow-18018'
  }
}