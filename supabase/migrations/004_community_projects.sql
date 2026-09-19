-- Migration 004: Table pour l'annuaire Made in DZ Tech

CREATE TABLE IF NOT EXISTS community_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  logo_url TEXT,
  category TEXT NOT NULL CHECK (category IN ('SaaS B2B', 'IA & ML', 'E-commerce & Paiement', 'Dev Tools', 'Mobile', 'Autre')),
  creator_name TEXT,
  creator_twitter TEXT,
  creator_email TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  upvotes INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_community_projects_status ON community_projects(status);
CREATE INDEX IF NOT EXISTS idx_community_projects_category ON community_projects(category);

-- RLS
ALTER TABLE community_projects ENABLE ROW LEVEL SECURITY;

-- Lecture publique des projets approuvés
CREATE POLICY "Anyone can view approved community projects" ON community_projects
  FOR SELECT USING (status = 'approved');

-- N'importe qui peut soumettre un projet (statut pending par défaut)
CREATE POLICY "Anyone can submit community projects" ON community_projects
  FOR INSERT WITH CHECK (status = 'pending');

-- L'admin peut tout lire et tout modifier
CREATE POLICY "Admin full access on community projects" ON community_projects
  FOR ALL USING (true);
