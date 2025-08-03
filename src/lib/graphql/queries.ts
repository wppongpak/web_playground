import { gql } from '@apollo/client';

// Queries
export const GET_BOOKS = gql`
    query GetBooks {
        books {
            id
            title
            author
        }
    }
`;

export const GET_BOOK = gql`
    query GetBook($id: ID!) {
        book(id: $id) {
            id
            title
            author
        }
    }
`;

export const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
        }
    }
`;

export const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            name
            email
        }
    }
`;

// Mutations
export const ADD_BOOK = gql`
    mutation AddBook($title: String!, $author: String!) {
        addBook(title: $title, author: $author) {
            id
            title
            author
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($name: String!, $email: String!) {
        addUser(name: $name, email: $email) {
            id
            name
            email
        }
    }
`;

// Additional CRUD mutations
export const UPDATE_BOOK = gql`
    mutation UpdateBook($id: ID!, $title: String, $author: String) {
        updateBook(id: $id, title: $title, author: $author) {
            id
            title
            author
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation DeleteBook($id: ID!) {
        deleteBook(id: $id)
    }
`;

export const UPDATE_USER = gql`
    mutation UpdateUser($id: ID!, $name: String, $email: String) {
        updateUser(id: $id, name: $name, email: $email) {
            id
            name
            email
        }
    }
`;

export const DELETE_USER = gql`
    mutation DeleteUser($id: ID!) {
        deleteUser(id: $id)
    }
`;
