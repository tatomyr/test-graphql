import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Post',
  fields: {
    _id: { type: GraphQLString },
    date: { type: GraphQLString },
    text: { type: GraphQLString },
  },
});
