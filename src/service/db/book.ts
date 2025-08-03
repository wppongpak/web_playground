import { Book, generateId, CrudService } from './core';

// In-memory book data storage
const books: Book[] = [
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

// Book service implementation
export const bookService: CrudService<Book> = {
    // Get all books
    getAll: (): Book[] => books,
    
    // Get book by ID
    getById: (id: string): Book | undefined => 
        books.find(book => book.id === id),
    
    // Create new book
    create: (data: Omit<Book, 'id'>): Book => {
        const newBook: Book = {
            id: generateId(books),
            ...data,
        };
        books.push(newBook);
        return newBook;
    },
    
    // Update book
    update: (id: string, updates: Partial<Omit<Book, 'id'>>): Book | null => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return null;
        
        books[bookIndex] = { ...books[bookIndex], ...updates };
        return books[bookIndex];
    },
    
    // Delete book
    delete: (id: string): boolean => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return false;
        
        books.splice(bookIndex, 1);
        return true;
    }
};

// Legacy compatibility functions
export const getAllBooks = () => bookService.getAll();
export const getBookById = (id: string) => bookService.getById(id);
export const addBook = (title: string, author: string) => bookService.create({ title, author });
export const updateBook = (id: string, updates: Partial<Omit<Book, 'id'>>) => bookService.update(id, updates);
export const deleteBook = (id: string) => bookService.delete(id);
