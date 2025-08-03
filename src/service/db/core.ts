// Core types and interfaces
export interface Book {
    id: string;
    title: string;
    author: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

// Core utility functions
export const generateId = (existingItems: { id: string }[]): string => {
    return String(existingItems.length + 1);
};

// Generic CRUD operations
export interface CrudService<T extends { id: string }> {
    getAll: () => T[];
    getById: (id: string) => T | undefined;
    create: (data: Omit<T, 'id'>) => T;
    update: (id: string, updates: Partial<Omit<T, 'id'>>) => T | null;
    delete: (id: string) => boolean;
}
