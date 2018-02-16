import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import postType from '../types/post';
import postDeleteType from '../types/post-delete';
import { MongoClient, ObjectID } from 'mongodb';

export default {
  type: new GraphQLList(postType),
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postDeleteType),
    }
  },
  async resolve(root, params, options) {
    const db = await MongoClient.connect(process.env.MONGO_URL);
    const dbInstance = db.db(process.env.DB_NAME);
    const result = await dbInstance.collection('posts').deleteOne({
      _id: ObjectID(params.data._id),
    });

    console.log('DELETED-->',result);

    const found = await dbInstance.collection('posts').find().toArray();
    return found;
  }
};
