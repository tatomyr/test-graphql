import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PostDelete',
  fields: {
    _id: { type: GraphQLString },
  }
});
