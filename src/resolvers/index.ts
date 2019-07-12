import { merge } from 'lodash';
import { resolvers as bookResolvers } from './book';
import { resolvers as authorResolvers } from './author';

const resolvers = merge(bookResolvers, authorResolvers);
export default resolvers;
