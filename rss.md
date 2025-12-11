Astro a un plugin officiel génial pour le RSS

1. Installe le plugin :
Dans ton terminal Windsurf :

bash
npm install @astrojs/rss
2. Crée le fichier de génération :
Crée un fichier src/pages/rss.xml.js (oui, .js car il génère du XML dynamiquement) :​

javascript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Malmeu Dev Blog',
    description: 'Le blog tech d\'un développeur algérien : SaaS, IA et Freelance.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      // Lien vers l'article
      link: `/blog/${post.slug}/`,
    })),
    // (Optionnel) Langue du flux
    customData: `<language>fr-dz</language>`,
  });
}
3. Configure ton URL de site :
Assure-toi que site: 'https://malmeu.info' est bien défini dans ton astro.config.mjs, sinon le RSS ne saura pas créer les liens complets.

Une fois déployé, ton flux sera accessible à https://malmeu.info/rss.xml. Tu pourras soumettre cette URL aux agrégateurs tech