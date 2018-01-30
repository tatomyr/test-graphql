import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    text: { type: GraphQLString },
  }
});
