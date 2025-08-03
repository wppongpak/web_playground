import { userService } from '../db/user';

// User resolver types
interface UserQueryArgs {
    id: string;
}

interface AddUserArgs {
    name: string;
    email: string;
}

interface UpdateUserArgs {
    id: string;
    name?: string;
    email?: string;
}

interface DeleteUserArgs {
    id: string;
}

// User query resolvers
const userQueries = {
    users: (): ReturnType<typeof userService.getAll> => 
        userService.getAll(),
        
    user: (_parent: unknown, { id }: UserQueryArgs): ReturnType<typeof userService.getById> => 
        userService.getById(id),
};

// User mutation resolvers
const userMutations = {
    addUser: (_parent: unknown, { name, email }: AddUserArgs): ReturnType<typeof userService.create> => 
        userService.create({ name, email }),
        
    updateUser: (_parent: unknown, { id, name, email }: UpdateUserArgs): ReturnType<typeof userService.update> => {
        const updates: { name?: string; email?: string } = {};
        if (name !== undefined) updates.name = name;
        if (email !== undefined) updates.email = email;
        return userService.update(id, updates);
    },
    
    deleteUser: (_parent: unknown, { id }: DeleteUserArgs): ReturnType<typeof userService.delete> => 
        userService.delete(id),
};

// Combined user resolvers
export const userResolvers = {
    Query: userQueries,
    Mutation: userMutations,
};
