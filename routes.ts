/**
 * Prefix for API authentication endpoints.
 * This is the default Auth JS configuration starting endpoint for app/api/auth/[...nextauth]/route.ts and should never be blocked.
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth';

/**
 * List of public routes that should be accessible regardless of user authentication status.
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/'];

/**
 * List of authentication page routes from where a user can log in and register.
 * These routes should only be accessible if the user is not already logged in.
 * @type {string[]}
 */
export const authRoutes: string[] = ['/auth/register', '/auth/login'];

/**
 * Default redirect URL after the user logs in.
 * @type {string}
 */
export const DEFAULT_REDIRECT_URL: string = '/dashboard';

export const LOGIN_PAGE_URL: string = '/auth/login';
