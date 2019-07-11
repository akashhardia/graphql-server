import { merge } from 'lodash';
import { resolvers as bookResolvers } from './book';

const resolvers = merge(bookResolvers);
export default resolvers;
