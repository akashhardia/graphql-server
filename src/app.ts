import { typeDefs, resolvers } from './Book';
import { ApolloServer } from 'apollo-server';

const apollo = new ApolloServer({ typeDefs, resolvers });

apollo.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
