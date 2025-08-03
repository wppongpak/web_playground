import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/api/graphql',
});

const authLink = setContext((_, { headers }) => {
    // Get authentication token from local storage if it exists
    // const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            // authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
