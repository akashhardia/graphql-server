import { merge } from 'lodash';
import { resolvers as bookResolvers, resolvers1 as bookResolvers1 } from './Book';

const resolvers = merge(bookResolvers, bookResolvers1);
console.log(resolvers);
export default resolvers;
