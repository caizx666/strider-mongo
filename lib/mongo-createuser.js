// 创建user
const debug = require("debug")("strider-mongo:mongo-createuser");
const MongoClient = require("mongodb").MongoClient;

exports.createUser = async function createUser({url, db, user, pwd, roles }) {
  debug("mongo connect", url || process.env.MONGO_URL);
  const client = await MongoClient.connect(url || process.env.MONGO_URL, { useUnifiedTopology: true });
  try {
    const thedb = client.db(db);
    await thedb.addUser(user, pwd, {
      roles,
    });
  } catch (err) {
    if (err.message !== `User "${user}@${db}" already exists`) {
      debug(err);
      throw err;
    }
  } finally {
    client.close();
  }
};
