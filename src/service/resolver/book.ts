import { bookService } from '../db/book';
import type { Resolver, Context } from './core';

// Book resolver types
interface BookQueryArgs {
    id: string;
}

interface AddBookArgs {
    title: string;
    author: string;
}

interface UpdateBookArgs {
    id: string;
    title?: string;
    author?: string;
}

interface DeleteBookArgs {
    id: string;
}

// Book query resolvers
const bookQueries = {
    books: (): ReturnType<typeof bookService.getAll> => 
        bookService.getAll(),
        
    book: (_parent: unknown, { id }: BookQueryArgs): ReturnType<typeof bookService.getById> => 
        bookService.getById(id),
};

// Book mutation resolvers
const bookMutations = {
    addBook: (_parent: unknown, { title, author }: AddBookArgs): ReturnType<typeof bookService.create> => 
        bookService.create({ title, author }),
        
    updateBook: (_parent: unknown, { id, title, author }: UpdateBookArgs): ReturnType<typeof bookService.update> => {
        const updates: { title?: string; author?: string } = {};
        if (title !== undefined) updates.title = title;
        if (author !== undefined) updates.author = author;
        return bookService.update(id, updates);
    },
    
    deleteBook: (_parent: unknown, { id }: DeleteBookArgs): ReturnType<typeof bookService.delete> => 
        bookService.delete(id),
};

// Combined book resolvers
export const bookResolvers = {
    Query: bookQueries,
    Mutation: bookMutations,
};
