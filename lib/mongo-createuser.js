// 创建user
const MongoClient = require("mongodb").MongoClient;

exports.createUser = async function createUser({ url, user }, context) {
  const { db, name, pwd, roles } = user;
  context.comment("mongo connect " + (url || process.env.MONGO_URL), db, name, pwd, roles);
  const client = await MongoClient.connect(url || process.env.MONGO_URL, {
    useUnifiedTopology: true,
  });
  try {
    const thedb = client.db(db);
    context.comment(`create ${name}@${db} ${roles.join(',')}`);
    await thedb.addUser(name, pwd, {
      roles,
    });
  } catch (err) {
    context.comment(err.message);
    if (err.message !== `User "${name}@${db}" already exists`) {
      throw err;
    }
  } finally {
    client.close();
  }
};
