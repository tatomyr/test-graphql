import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import postType from '../types/post';
import { MongoClient } from 'mongodb';

export default {
  type: new GraphQLList(postType),
  args: {},
  async resolve(root, params, options) {
    const db = await MongoClient.connect(process.env.MONGO_URL);
    const dbInstance = db.db(process.env.DB_NAME);
    const result = await dbInstance.collection('posts').find().toArray();
    return result;
  }
};
