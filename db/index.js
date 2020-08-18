const { MongoClient } = require("mongodb");
const config = require("../config");

const client = new MongoClient(config.DB_URI);

const connect = () => {
  try {
    await client.connect();

    // TODO: remove this connection test
    await client.listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
