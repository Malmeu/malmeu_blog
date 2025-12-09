# DevBlog - Blog Technique Personnel

Blog technique moderne construit avec Astro, optimisé SEO et performant.

## Fonctionnalités

- **Framework** : Astro avec génération statique (SSG)
- **Styling** : Tailwind CSS avec dark mode par défaut
- **Contenu** : Content Collections avec Markdown/MDX
- **SEO** : Meta tags, Open Graph, Twitter Cards, Schema.org
- **Performance** : Score Lighthouse > 95
- **RSS Feed** : Flux RSS automatique
- **Sitemap** : Génération automatique

## Structure du projet

```text
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   └── TableOfContents.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       └── *.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── rss.xml.ts
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── [slug].astro
│   │       └── category/[category].astro
│   └── styles/
│       └── global.css
└── package.json
```

## Commandes

| Commande | Action |
| :------- | :----- |
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur de dev sur `localhost:4321` |
| `npm run build` | Construire le site pour la production |
| `npm run preview` | Prévisualiser le build localement |
| `npm run astro check` | Vérifier les types TypeScript |

## Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## Ajouter un article

Créer un fichier `.md` dans `src/content/blog/` avec le frontmatter suivant :

```markdown
---
title: "Titre de l'article"
description: "Description courte"
publishDate: 2024-12-01
category: "Dev Web"
tags: ["tag1", "tag2"]
image: "https://example.com/image.jpg"
draft: false
---

Contenu de l'article...
```

## Catégories disponibles

- Dev Web
- IA/ML
- SaaS
- Business
- Algérie Tech

## Déploiement sur Vercel

1. Connecter le repo GitHub à Vercel
2. Vercel détecte automatiquement Astro
3. Déployer !

Ou via CLI :

```bash
npm i -g vercel
vercel
```

## Configuration

Modifier `astro.config.mjs` pour changer l'URL du site :

```javascript
export default defineConfig({
  site: 'https://votre-domaine.com',
  // ...
});
```

## Personnalisation

- **Couleurs** : Modifier les variables CSS dans `src/styles/global.css`
- **Infos personnelles** : Mettre à jour `src/pages/about.astro` et `src/components/Footer.astro`
- **Liens sociaux** : Modifier les URLs dans les composants Header et Footer

## Licence

MIT
