import { gql } from 'graphql-tag';
import { coreTypeDefs } from './core';
import { bookTypeDefs } from './book';
import { userTypeDefs } from './user';

// Base types that need to be defined first
const baseTypeDefs = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

// Combined type definitions
export const typeDefs = [
    baseTypeDefs,
    coreTypeDefs,
    bookTypeDefs,
    userTypeDefs,
];
