// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //used for sqlite
    connection: {
      //GOTCHA: needs to be from the root folder! Not from where this file lives
      filename: './data/car-dealer.db3'
    },

    migrations: {
      directory: './data/migrations'
    },

    seeds: {
      directory: './data/seeds'
    }
  },


};
