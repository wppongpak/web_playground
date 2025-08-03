import { gql } from 'graphql-tag';

export const userTypeDefs = gql`
    type User implements Node {
        id: ID!
        name: String!
        email: String!
    }

    extend type Query {
        users: [User!]!
        user(id: ID!): User
    }

    extend type Mutation {
        addUser(name: String!, email: String!): User!
        updateUser(id: ID!, name: String, email: String): User
        deleteUser(id: ID!): Boolean!
    }
`;
