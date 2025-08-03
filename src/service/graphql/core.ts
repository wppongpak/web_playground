import { gql } from 'graphql-tag';

export const coreTypeDefs = gql`
    # Common scalar types and directives can go here
    scalar DateTime
    
    # Common interfaces
    interface Node {
        id: ID!
    }
`;
