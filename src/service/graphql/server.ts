import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema';
import { resolvers } from '../resolver';

// Create and configure Apollo Server
export const createApolloServer = () => {
    return new ApolloServer({
        typeDefs,
        resolvers,
        // Additional server configuration can be added here
        introspection: process.env.NODE_ENV !== 'production',
        includeStacktraceInErrorResponses: process.env.NODE_ENV !== 'production',
    });
};

// Export the server instance
export const apolloServer = createApolloServer();
