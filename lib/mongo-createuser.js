// 创建user
const MongoClient = require("mongodb").MongoClient;

exports.createUser = async function createUser({ url, user }, context) {
  const { db, name, pwd, roles } = user;
  context.comment("mongo connect " + (url || process.env.MONGO_URL));
  const client = await MongoClient.connect(url || process.env.MONGO_URL, {
    useUnifiedTopology: true,
  });
  try {
    const thedb = client.db(db);
    await thedb.addUser(name, pwd, {
      roles,
    });
  } catch (err) {
    if (err.message !== `User "${name}@${db}" already exists`) {
      context.comment(err.message);
      throw err;
    }
  } finally {
    client.close();
  }
};
