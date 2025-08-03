# GraphQL Examples

This file contains example GraphQL queries and mutations you can test with your GraphQL server.

## Queries

### Get all books

```graphql
query GetBooks {
    books {
        id
        title
        author
    }
}
```

### Get a specific book

```graphql
query GetBook($id: ID!) {
    book(id: $id) {
        id
        title
        author
    }
}
```

### Get all users

```graphql
query GetUsers {
    users {
        id
        name
        email
    }
}
```

### Get a specific user

```graphql
query GetUser($id: ID!) {
    user(id: $id) {
        id
        name
        email
    }
}
```

## Mutations

### Add a new book

```graphql
mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
        id
        title
        author
    }
}
```

Variables:

```json
{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
}
```

### Add a new user

```graphql
mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
        id
        name
        email
    }
}
```

Variables:

```json
{
    "name": "Alice Johnson",
    "email": "alice@example.com"
}
```

## Testing with curl

You can also test your GraphQL API using curl:

### Query example

```bash
curl -X POST http://localhost:3000/api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ books { id title author } }"}'
```

### Mutation example

```bash
curl -X POST http://localhost:3000/api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "mutation AddBook($title: String!, $author: String!) { addBook(title: $title, author: $author) { id title author } }", "variables": {"title": "1984", "author": "George Orwell"}}'
```
