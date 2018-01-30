import { MongoClient } from 'mongodb';

const mongo = cb => {
  MongoClient.connect(process.env.MONGO_URL, (err, db) => {
    if (err) throw err;
    cb(db.db(process.env.DB_NAME));
  });
}

export default mongo;
