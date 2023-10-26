import { authMiddleware } from '@clerk/nextjs';


export default authMiddleware({});

export const config={
    matcher: ['/chat','/chat:id*','/register']
}