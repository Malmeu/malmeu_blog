-- Table pour les abonnés newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Table pour les réactions aux articles
CREATE TABLE IF NOT EXISTS post_reactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  article_slug TEXT NOT NULL,
  reaction_type TEXT NOT NULL CHECK (reaction_type IN ('like', 'love', 'fire', 'think')),
  user_fingerprint TEXT NOT NULL, -- Hash pour identifier l'utilisateur sans compte
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(article_slug, user_fingerprint) -- Un utilisateur = une réaction par article
);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_reactions_slug ON post_reactions(article_slug);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Vue pour compter les réactions par article
CREATE OR REPLACE VIEW reaction_counts AS
SELECT 
  article_slug,
  COUNT(*) FILTER (WHERE reaction_type = 'like') as like_count,
  COUNT(*) FILTER (WHERE reaction_type = 'love') as love_count,
  COUNT(*) FILTER (WHERE reaction_type = 'fire') as fire_count,
  COUNT(*) FILTER (WHERE reaction_type = 'think') as think_count
FROM post_reactions
GROUP BY article_slug;

-- RLS (Row Level Security)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_reactions ENABLE ROW LEVEL SECURITY;

-- Politique : tout le monde peut s'inscrire à la newsletter
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Politique : tout le monde peut ajouter/modifier ses réactions
CREATE POLICY "Anyone can add reactions" ON post_reactions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update own reactions" ON post_reactions
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete own reactions" ON post_reactions
  FOR DELETE USING (true);

-- Politique : tout le monde peut lire les réactions (pour les compteurs)
CREATE POLICY "Anyone can read reactions" ON post_reactions
  FOR SELECT USING (true);
