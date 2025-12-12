import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B6vaW939.mjs';
export { renderers } from '../../renderers.mjs';

const ADMIN_CONFIG = {
  // Change this password in production!
  // Use a strong password with at least 12 characters, numbers, and symbols
  PASSWORD: "Maczizi96@"};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  // Check if already logged in
  const session = localStorage.getItem('admin_session');
  const expiry = localStorage.getItem('admin_session_expiry');
  
  if (session === 'authenticated' && expiry && Date.now() < parseInt(expiry)) {
    // Already logged in, redirect to admin
    window.location.href = '/admin/comments';
  }
  
  // Get admin password from data attribute
  const loginCard = document.querySelector('[data-admin-password]');
  const ADMIN_PASSWORD = loginCard?.dataset.adminPassword || 'admin123';
  
  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');
  const loginButton = document.getElementById('login-button');
  
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const password = document.getElementById('password').value;
      
      // Show loading state
      const originalText = loginButton.textContent;
      loginButton.textContent = 'Connexion...';
      loginButton.disabled = true;
      
      try {
        // Validate password
        if (password === ADMIN_PASSWORD) {
          // Use localStorage for session (works on client-side)
          localStorage.setItem('admin_session', 'authenticated');
          localStorage.setItem('admin_session_expiry', String(Date.now() + 24 * 60 * 60 * 1000)); // 24 hours
          
          // Redirect to admin page
          window.location.href = '/admin/comments';
        } else {
          // Show error
          errorMessage.classList.remove('hidden');
          document.getElementById('password').value = '';
          
          // Hide error after 3 seconds
          setTimeout(() => {
            errorMessage.classList.add('hidden');
          }, 3000);
        }
      } catch (error) {
        console.error('Login error:', error);
        errorMessage.classList.remove('hidden');
      } finally {
        // Reset button state
        loginButton.textContent = originalText;
        loginButton.disabled = false;
      }
    });
  }
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Connexion Admin", "description": "Acc\xE8s \xE0 l'administration des commentaires", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center px-4"> <div class="max-w-md w-full"> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-8 shadow-xl"${addAttribute(ADMIN_CONFIG.PASSWORD, "data-admin-password")}> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-[var(--color-text)] mb-2">
🔐 Admin
</h1> <p class="text-[var(--color-text-muted)]">
Accès à la modération des commentaires
</p> </div> <form id="login-form" class="space-y-6"> <div> <label for="password" class="block text-sm font-medium text-[var(--color-text)] mb-2">
Mot de passe admin
</label> <input type="password" id="password" name="password" required class="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-bg)] rounded-lg text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent" placeholder="Entrez votre mot de passe"> </div> <div id="error-message" class="hidden bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-center">
❌ Mot de passe incorrect
</div> <button type="submit" id="login-button" class="w-full px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-secondary)]">
Se connecter
</button> </form> <div class="mt-6 text-center"> <p class="text-xs text-[var(--color-text-muted)]">
Session sécurisée • Déconnexion automatique après 24h
</p> </div> </div> </div> </div> ` }));
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/login.astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
