import './db';
import resolvers from './resolvers';
import * as fs from 'fs';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'))}`;
const apollo = new ApolloServer({ typeDefs, resolvers });

apollo.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
