import { User, generateId, CrudService } from './core';

// In-memory user data storage
let users: User[] = [
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

// User service implementation
export const userService: CrudService<User> = {
    // Get all users
    getAll: (): User[] => users,
    
    // Get user by ID
    getById: (id: string): User | undefined => 
        users.find(user => user.id === id),
    
    // Create new user
    create: (data: Omit<User, 'id'>): User => {
        const newUser: User = {
            id: generateId(users),
            ...data,
        };
        users.push(newUser);
        return newUser;
    },
    
    // Update user
    update: (id: string, updates: Partial<Omit<User, 'id'>>): User | null => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return null;
        
        users[userIndex] = { ...users[userIndex], ...updates };
        return users[userIndex];
    },
    
    // Delete user
    delete: (id: string): boolean => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return false;
        
        users.splice(userIndex, 1);
        return true;
    }
};

// Legacy compatibility functions
export const getAllUsers = () => userService.getAll();
export const getUserById = (id: string) => userService.getById(id);
export const addUser = (name: string, email: string) => userService.create({ name, email });
export const updateUser = (id: string, updates: Partial<Omit<User, 'id'>>) => userService.update(id, updates);
export const deleteUser = (id: string) => userService.delete(id);
