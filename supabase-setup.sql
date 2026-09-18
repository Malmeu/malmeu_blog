-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  content TEXT NOT NULL,
  article_slug TEXT NOT NULL,
  article_title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_comments_article_slug ON comments(article_slug);
CREATE INDEX IF NOT EXISTS idx_comments_status ON comments(status);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to insert comments (but they'll be pending by default)
CREATE POLICY "Anyone can insert comments" ON comments
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read approved comments
CREATE POLICY "Anyone can read approved comments" ON comments
  FOR SELECT USING (status = 'approved');

-- Allow anyone to read all comments (for admin page - you might want to restrict this in production)
CREATE POLICY "Anyone can read all comments" ON comments
  FOR SELECT USING (true);

-- Allow anyone to update comments (for moderation - you might want to restrict this in production)
CREATE POLICY "Anyone can update comments" ON comments
  FOR UPDATE USING (true);

-- Function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_comments_updated_at 
  BEFORE UPDATE ON comments 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- Article Views Table & Functions
-- ==========================================

CREATE TABLE IF NOT EXISTS article_views (
  article_slug TEXT PRIMARY KEY,
  views_count BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_article_views_count ON article_views(views_count DESC);

-- Function to atomically increment views
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

ALTER TABLE article_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read article views" ON article_views
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert article views" ON article_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update article views" ON article_views
  FOR UPDATE USING (true);

