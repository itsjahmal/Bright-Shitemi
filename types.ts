import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface AgendaItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram';
  url: string;
}