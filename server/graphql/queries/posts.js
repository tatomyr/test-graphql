import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import postType from '../types/post';
// import getProjection from '../../get-projection';
// import CommentModel from '../../../models/comment';
// import mongo from '../../mongo'; // ???

console.log('queries/posts---->',postType);

export default {
  type: new GraphQLList(postType),
  args: {},
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

    return [{_id: "---id---", text: 'lsdjflsjf', date: '232423'}]
  }
};
