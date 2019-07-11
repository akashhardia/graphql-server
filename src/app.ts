import './db';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import { ApolloServer } from 'apollo-server';

const apollo = new ApolloServer({ typeDefs, resolvers });

apollo.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
