-- Migration 003: Table et fonction pour le compteur de vues réelles des articles

-- 1. Table article_views
CREATE TABLE IF NOT EXISTS article_views (
  article_slug TEXT PRIMARY KEY,
  views_count BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_article_views_count ON article_views(views_count DESC);

-- 2. Fonction RPC pour incrémenter de façon atomique sans race condition
CREATE OR REPLACE FUNCTION increment_article_views(slug TEXT)
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  INSERT INTO article_views (article_slug, views_count, updated_at)
  VALUES (slug, 1, NOW())
  ON CONFLICT (article_slug)
  DO UPDATE SET
    views_count = article_views.views_count + 1,
    updated_at = NOW()
  RETURNING views_count INTO new_count;

  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Row Level Security (RLS)
ALTER TABLE article_views ENABLE ROW LEVEL SECURITY;

-- Tout le monde peut lire le nombre de vues
CREATE POLICY "Anyone can read article views" ON article_views
  FOR SELECT USING (true);

-- Permettre également l'insertion et la mise à jour si nécessaire
CREATE POLICY "Anyone can insert article views" ON article_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update article views" ON article_views
  FOR UPDATE USING (true);
