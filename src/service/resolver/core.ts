// Core resolver types
export interface Context {
    // Add context properties here as needed
    user?: any;
    request?: Request;
}

export interface ResolverArgs {
    [key: string]: any;
}

export interface ResolverParent {
    [key: string]: any;
}

// Base resolver type
export type Resolver<TResult = any, TParent = ResolverParent, TArgs = ResolverArgs> = (
    parent: TParent,
    args: TArgs,
    context: Context,
    info: any
) => TResult | Promise<TResult>;

// Core resolvers (if any common functionality is needed)
export const coreResolvers = {
    Node: {
        __resolveType: (obj: any) => {
            if (obj.title) return 'Book';
            if (obj.email) return 'User';
            return null;
        },
    },
};
