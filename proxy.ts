import { clerkMiddleware } from '@clerk/nextjs/server';
import { ca } from 'zod/v4/locales';

export default clerkMiddleware();
  const {userId, orgId } = await auth();
  if(userId && !orgId){
    try{
      const client  = await clerkClient();
      const organizations = await client.organizations.getOrganizations({
        memberUserId: userId,
      }); 
    }
    catch(error){
  }
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};