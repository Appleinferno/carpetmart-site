import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Protect the admin area (the login page itself stays open).
  if (pathname.startsWith('/admin') && pathname !== '/admin/login/') {
    const token = context.cookies.get('admin_token')?.value;
    const secret = import.meta.env.ADMIN_SECRET;
    if (!secret || token !== secret) {
      return context.redirect('/admin/login/');
    }
  }

  const response = await next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
});
