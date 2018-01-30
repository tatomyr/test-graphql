import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import postType from '../types/post';
import postInputType from '../types/post-input';
import { MongoClient } from 'mongodb';

export default {
  type: new GraphQLList(postType),
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType),
    }
  },
  async resolve(root, params, options) {
    const db = await MongoClient.connect(process.env.MONGO_URL);
    const dbInstance = db.db(process.env.DB_NAME);
    const result = await dbInstance.collection('posts').insert({
      text: params.data.text,
      date: Date.now(),
      method: params.data.method,
    });

    console.log('INSERTED -->',result, result.insertedIds[0]);

    const found = await dbInstance.collection('posts').find().toArray();
    return found;
  }
};
