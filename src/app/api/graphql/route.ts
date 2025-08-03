import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { apolloServer } from '@/service/graphql';

// Create Next.js handler using the Apollo server from service layer
const handler = startServerAndCreateNextHandler(apolloServer);

export { handler as GET, handler as POST };
