---
title: "Pourquoi j'ai choisi Astro pour mon blog tech"
description: "Découvrez pourquoi Astro est devenu mon framework de prédilection pour créer un blog technique performant, optimisé SEO et agréable à maintenir."
publishDate: 2024-12-01
category: "Dev Web"
tags: ["astro", "javascript", "performance", "ssg"]
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
draft: false
---

## Introduction

Quand j'ai décidé de créer mon blog technique, j'avais plusieurs options : Next.js, Gatsby, Hugo, ou encore un simple WordPress. Après avoir testé plusieurs solutions, mon choix s'est porté sur **Astro**. Voici pourquoi.

## Les critères de sélection

Avant de choisir un framework, j'ai défini mes critères prioritaires :

- **Performance** : Le site doit être ultra-rapide
- **SEO** : Optimisation native pour les moteurs de recherche
- **DX (Developer Experience)** : Agréable à utiliser au quotidien
- **Flexibilité** : Pouvoir utiliser mes outils préférés

## Pourquoi Astro ?

### 1. Zero JavaScript par défaut

Astro adopte une approche "Islands Architecture". Par défaut, aucun JavaScript n'est envoyé au client. Le résultat ? Des pages ultra-légères et rapides.

```astro
---
// Ce code s'exécute uniquement côté serveur
const posts = await getCollection('blog');
---

<ul>
  {posts.map(post => <li>{post.data.title}</li>)}
</ul>
```

### 2. Content Collections

La gestion du contenu avec les Content Collections est un vrai bonheur. TypeScript valide automatiquement le frontmatter de mes articles :

```typescript
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(),
  }),
});
```

### 3. Intégrations faciles

Ajouter Tailwind CSS, MDX ou un sitemap se fait en une commande :

```bash
npx astro add tailwind mdx sitemap
```

### 4. Performance Lighthouse

Avec Astro, atteindre un score Lighthouse de 100 est presque automatique. Le framework est conçu pour la performance.

## Comparaison avec les alternatives

| Critère | Astro | Next.js | Gatsby |
|---------|-------|---------|--------|
| JS par défaut | ❌ | ✅ | ✅ |
| Build time | Rapide | Moyen | Lent |
| Learning curve | Facile | Moyenne | Moyenne |
| Content focus | ✅ | ❌ | ✅ |

## Conclusion

Astro est le choix idéal pour un blog ou un site orienté contenu. Sa philosophie "ship less JavaScript" et son excellent support du Markdown en font un outil parfait pour les développeurs qui veulent se concentrer sur le contenu.

Si vous hésitez encore, je vous encourage à essayer Astro sur un petit projet. Vous serez surpris par sa simplicité et ses performances.

---

*Vous avez des questions sur Astro ? N'hésitez pas à me contacter !*
