// Resolver exports
export * from './core';
export * from './book';
export * from './user';

// Combined resolvers
import { coreResolvers } from './core';
import { bookResolvers } from './book';
import { userResolvers } from './user';

export const resolvers = {
    ...coreResolvers,
    Query: {
        ...bookResolvers.Query,
        ...userResolvers.Query,
    },
    Mutation: {
        ...bookResolvers.Mutation,
        ...userResolvers.Mutation,
    },
};
