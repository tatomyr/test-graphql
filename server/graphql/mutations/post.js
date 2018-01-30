import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

import postType from '../types/post';
// import getProjection from '../../get-projection';
// import CommentModel from '../../../models/comment';
// import mongo from '../../mongo'; // ???

console.log(postType);

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postType)
    }
  },
  // args: {
  //   postId: {
  //     name: 'postId',
  //     type: new GraphQLNonNull(GraphQLID)
  //   }
  // },
  resolve: (root, params, options) => {
    // const projection = getProjection(options.fieldASTs[0]);

    // return CommentModel
    //   .find({
    //     postId: params.postId
    //   })
    //   .select(projection)
    //   .exec();
    console.log('-------');

    return true;
  }
};
