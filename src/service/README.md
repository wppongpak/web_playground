# Service Layer Documentation

This directory contains the service layer for the web playground application, organized into modular components by domain.

## Structure

```
src/service/
├── db/                    # Database/Data layer
│   ├── core.ts           # Core types, interfaces, and utilities
│   ├── book.ts           # Book data service and CRUD operations
│   ├── user.ts           # User data service and CRUD operations
│   └── index.ts          # Database service exports
├── graphql/              # GraphQL schema layer
│   ├── core.ts           # Core GraphQL types and interfaces
│   ├── book.ts           # Book GraphQL schema definitions
│   ├── user.ts           # User GraphQL schema definitions
│   ├── schema.ts         # Combined schema configuration
│   ├── server.ts         # Apollo Server configuration
│   └── index.ts          # GraphQL service exports
├── resolver/             # GraphQL resolver layer
│   ├── core.ts           # Core resolver types and utilities
│   ├── book.ts           # Book resolvers (queries & mutations)
│   ├── user.ts           # User resolvers (queries & mutations)
│   └── index.ts          # Combined resolver exports
└── index.ts              # Main service exports
```

## Modular Architecture

### Database Layer (`/db`)

Each module provides a consistent CRUD interface:

#### **Core (`/db/core.ts`)**
- Common types (`Book`, `User`)
- Generic `CrudService<T>` interface
- Utility functions (`generateId`)

#### **Book Service (`/db/book.ts`)**
```typescript
import { bookService } from '@/service/db/book';

// CRUD operations
const books = bookService.getAll();
const book = bookService.getById('1');
const newBook = bookService.create({ title: 'Title', author: 'Author' });
const updated = bookService.update('1', { title: 'New Title' });
const deleted = bookService.delete('1');
```

#### **User Service (`/db/user.ts`)**
```typescript
import { userService } from '@/service/db/user';

// CRUD operations
const users = userService.getAll();
const user = userService.getById('1');
const newUser = userService.create({ name: 'Name', email: 'email@example.com' });
const updated = userService.update('1', { name: 'New Name' });
const deleted = userService.delete('1');
```

### GraphQL Schema Layer (`/graphql`)

Modular schema definitions with extend patterns:

#### **Core Schema (`/graphql/core.ts`)**
- Common scalars and interfaces
- Base `Node` interface

#### **Book Schema (`/graphql/book.ts`)**
```graphql
type Book implements Node {
    id: ID!
    title: String!
    author: String!
}

extend type Query {
    books: [Book!]!
    book(id: ID!): Book
}

extend type Mutation {
    addBook(title: String!, author: String!): Book!
    updateBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): Boolean!
}
```

#### **User Schema (`/graphql/user.ts`)**
```graphql
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
```

### Resolver Layer (`/resolver`)

Type-safe resolvers organized by domain:

#### **Core Resolvers (`/resolver/core.ts`)**
- Common resolver types and interfaces
- Type utilities for resolver functions

#### **Book Resolvers (`/resolver/book.ts`)**
```typescript
// Strongly typed resolver functions
const bookResolvers = {
    Query: {
        books: () => bookService.getAll(),
        book: (_parent: unknown, { id }: BookQueryArgs) => bookService.getById(id),
    },
    Mutation: {
        addBook: (_parent: unknown, { title, author }: AddBookArgs) => 
            bookService.create({ title, author }),
        // ... other mutations
    },
};
```

#### **User Resolvers (`/resolver/user.ts`)**
```typescript
// Strongly typed resolver functions
const userResolvers = {
    Query: {
        users: () => userService.getAll(),
        user: (_parent: unknown, { id }: UserQueryArgs) => userService.getById(id),
    },
    Mutation: {
        addUser: (_parent: unknown, { name, email }: AddUserArgs) => 
            userService.create({ name, email }),
        // ... other mutations
    },
};
```

## Benefits of Modular Architecture

### ✅ **Separation of Concerns**
- Database logic separate from GraphQL concerns
- Schema definitions separate from resolver implementation
- Each module focuses on a single domain (books, users)

### ✅ **Type Safety**
- Strongly typed resolver arguments
- Consistent interfaces across modules
- Better IDE support and error detection

### ✅ **Maintainability**
- Easy to add new domains (just create new book.ts, user.ts files)
- Changes to one domain don't affect others
- Clear file organization and naming conventions

### ✅ **Testability**
- Each module can be tested independently
- Mock dependencies easily
- Clear boundaries for unit testing

### ✅ **Scalability**
- Easy to add new types, queries, and mutations
- Modular structure supports team development
- Can easily extract modules to separate packages

## Usage

### Adding a New Domain (e.g., Posts)

1. **Create database service**: `/db/post.ts`
2. **Create GraphQL schema**: `/graphql/post.ts`  
3. **Create resolvers**: `/resolver/post.ts`
4. **Update index files** to export new modules

### API Integration

The API route remains simple:
```typescript
import { apolloServer } from '@/service/graphql';
const handler = startServerAndCreateNextHandler(apolloServer);
export { handler as GET, handler as POST };
```

All complexity is handled in the service layer with clear module boundaries.
