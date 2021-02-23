const pgConnection = process.env.DATABASE_URL;
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/fitness.db3'
    }
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    }
  },
  production: {
    client: "pg",
    connection: pgConnection,
    pool:{
      min: 2,
      max:10
    },
    migrations: {
      directory: './migrations'
    }
  }
};
