import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
 "/sign-in(.*)",  // <-- catch-all
  "/sign-up(.*)",
  "/api/clerk(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    // console.log("Protecting route:", req.nextUrl.pathname);
    await auth.protect(); // redirects unauthenticated users to /sign-in
 
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};

