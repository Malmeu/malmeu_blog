import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

const CONTENT_DIR = 'src/content/blog';

// Helper to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Helper to generate frontmatter
function generateFrontmatter(data: Record<string, any>): string {
  const lines = ['---'];
  
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null || value === '') continue;
    
    if (Array.isArray(value)) {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    } else if (typeof value === 'boolean') {
      lines.push(`${key}: ${value}`);
    } else if (key === 'publishDate') {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: "${value.replace(/"/g, '\\"')}"`);
    }
  }
  
  lines.push('---');
  return lines.join('\n');
}

// GET - List all articles
export const GET: APIRoute = async () => {
  try {
    const contentPath = path.join(process.cwd(), CONTENT_DIR);
    const files = await fs.readdir(contentPath);
    const mdFiles = files.filter(f => f.endsWith('.md'));
    
    const articles: Record<string, any>[] = await Promise.all(
      mdFiles.map(async (filename) => {
        const filePath = path.join(contentPath, filename);
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Parse frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        const frontmatter: Record<string, any> = {};
        
        if (frontmatterMatch) {
          const lines = frontmatterMatch[1].split('\n');
          for (const line of lines) {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
              const key = line.slice(0, colonIndex).trim();
              let value = line.slice(colonIndex + 1).trim();
              
              // Parse value
              if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
              } else if (value.startsWith('[')) {
                try {
                  frontmatter[key] = JSON.parse(value);
                  continue;
                } catch {}
              } else if (value === 'true') {
                frontmatter[key] = true;
                continue;
              } else if (value === 'false') {
                frontmatter[key] = false;
                continue;
              }
              frontmatter[key] = value;
            }
          }
        }
        
        // Get body content
        const bodyMatch = content.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
        const body = bodyMatch ? bodyMatch[1].trim() : '';
        
        return {
          slug: filename.replace('.md', ''),
          filename,
          ...frontmatter,
          body,
        };
      })
    );
    
    // Sort by publishDate descending
    articles.sort((a, b) => {
      const dateA = new Date(a.publishDate || 0);
      const dateB = new Date(b.publishDate || 0);
      return dateB.getTime() - dateA.getTime();
    });
    
    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to list articles' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// POST - Create new article
export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { title, description, category, tags, image, draft, featured, sponsored, sponsorName, sponsorUrl, sponsorLogo, body } = data;
    
    if (!title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const slug = generateSlug(title);
    const filename = `${slug}.md`;
    const filePath = path.join(process.cwd(), CONTENT_DIR, filename);
    
    // Check if file already exists
    try {
      await fs.access(filePath);
      return new Response(JSON.stringify({ error: 'Article with this slug already exists' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      // File doesn't exist, we can proceed
    }
    
    const frontmatter = generateFrontmatter({
      title,
      description,
      publishDate: new Date().toISOString().split('T')[0],
      category: category || 'Général',
      tags: tags || [],
      image: image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      draft: draft ?? true,
      featured: featured ?? false,
      sponsored: sponsored ?? false,
      sponsorName,
      sponsorUrl,
      sponsorLogo,
    });
    
    const content = `${frontmatter}\n\n${body || '# ' + title + '\n\nCommencez à écrire votre article ici...'}`;
    
    await fs.writeFile(filePath, content, 'utf-8');
    
    return new Response(JSON.stringify({ success: true, slug, filename }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create article' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// PUT - Update existing article
export const PUT: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { slug, title, description, publishDate, category, tags, image, draft, featured, sponsored, sponsorName, sponsorUrl, sponsorLogo, body } = data;
    
    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const filename = `${slug}.md`;
    const filePath = path.join(process.cwd(), CONTENT_DIR, filename);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      return new Response(JSON.stringify({ error: 'Article not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const frontmatter = generateFrontmatter({
      title,
      description,
      publishDate: publishDate || new Date().toISOString().split('T')[0],
      category: category || 'Général',
      tags: tags || [],
      image: image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      draft: draft ?? false,
      featured: featured ?? false,
      sponsored: sponsored ?? false,
      sponsorName,
      sponsorUrl,
      sponsorLogo,
    });
    
    const content = `${frontmatter}\n\n${body || ''}`;
    
    await fs.writeFile(filePath, content, 'utf-8');
    
    return new Response(JSON.stringify({ success: true, slug }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update article' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// DELETE - Delete article
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { slug } = await request.json();
    
    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const filename = `${slug}.md`;
    const filePath = path.join(process.cwd(), CONTENT_DIR, filename);
    
    await fs.unlink(filePath);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete article' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
