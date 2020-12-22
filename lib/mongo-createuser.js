// 创建user
const debug = require("debug")("strider-mongo:mongo-createuser");
const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URL;

exports.createUser = async function createUser({ db, user, pwd, roles }) {
  debug("mongo connect", url);
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
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
