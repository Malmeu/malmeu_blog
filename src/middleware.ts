import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  try {
    const url = new URL(context.request.url);
    
    // Cache simple pour les assets statiques
    if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|css|js|woff|woff2)$/i)) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
    
    // Cache pour les pages
    if (!url.pathname.startsWith('/api/')) {
      response.headers.set('Cache-Control', 'public, max-age=3600');
    }
  } catch (error) {
    // Silently ignore errors to prevent middleware failure
  }
  
  return response;
});
