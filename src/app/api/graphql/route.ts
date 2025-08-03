import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

// Sample data
const books = [
    {
        id: '1',
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: '2',
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const users = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
    },
];

// GraphQL schema
const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        books: [Book!]!
        book(id: ID!): Book
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        addBook(title: String!, author: String!): Book!
        addUser(name: String!, email: String!): User!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        books: () => books,
        book: (_: any, { id }: { id: string }) =>
            books.find(book => book.id === id),
        users: () => users,
        user: (_: any, { id }: { id: string }) =>
            users.find(user => user.id === id),
    },
    Mutation: {
        addBook: (
            _: any,
            { title, author }: { title: string; author: string }
        ) => {
            const newBook = {
                id: String(books.length + 1),
                title,
                author,
            };
            books.push(newBook);
            return newBook;
        },
        addUser: (_: any, { name, email }: { name: string; email: string }) => {
            const newUser = {
                id: String(users.length + 1),
                name,
                email,
            };
            users.push(newUser);
            return newUser;
        },
    },
};

// Create Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Create Next.js handler
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
