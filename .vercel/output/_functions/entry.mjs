import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CbS3qxsb.mjs';
import { manifest } from './manifest_dlnxRi4g.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/articles/new.astro.mjs');
const _page4 = () => import('./pages/admin/articles/_slug_.astro.mjs');
const _page5 = () => import('./pages/admin/articles.astro.mjs');
const _page6 = () => import('./pages/admin/comments.astro.mjs');
const _page7 = () => import('./pages/admin/login.astro.mjs');
const _page8 = () => import('./pages/api/articles.astro.mjs');
const _page9 = () => import('./pages/api/newsletter.astro.mjs');
const _page10 = () => import('./pages/api/reactions.astro.mjs');
const _page11 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page12 = () => import('./pages/blog/_slug_.astro.mjs');
const _page13 = () => import('./pages/blog.astro.mjs');
const _page14 = () => import('./pages/contact.astro.mjs');
const _page15 = () => import('./pages/rss.xml.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin/articles/new.astro", _page3],
    ["src/pages/admin/articles/[slug].astro", _page4],
    ["src/pages/admin/articles/index.astro", _page5],
    ["src/pages/admin/comments.astro", _page6],
    ["src/pages/admin/login.astro", _page7],
    ["src/pages/api/articles.ts", _page8],
    ["src/pages/api/newsletter.ts", _page9],
    ["src/pages/api/reactions.ts", _page10],
    ["src/pages/blog/category/[category].astro", _page11],
    ["src/pages/blog/[slug].astro", _page12],
    ["src/pages/blog/index.astro", _page13],
    ["src/pages/contact.astro", _page14],
    ["src/pages/rss.xml.js", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f7d86974-a255-404d-bf95-948bb2d81f16",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
