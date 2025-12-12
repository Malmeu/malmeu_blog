import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = new URL(context.request.url);
  
  // Cache pour les images
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }
  
  // Cache pour les assets statiques (CSS, JS, fonts)
  if (url.pathname.match(/\.(css|js|woff|woff2|ttf|eot)$/i) || url.pathname.startsWith('/_astro/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }
  
  // Cache pour les pages de blog (1 heure, revalide en arrière-plan)
  if (url.pathname.startsWith('/blog/') && !url.pathname.includes('/api/')) {
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return response;
  }
  
  // Cache pour la page d'accueil et autres pages (5 minutes)
  if (!url.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
  }
  
  return response;
});
