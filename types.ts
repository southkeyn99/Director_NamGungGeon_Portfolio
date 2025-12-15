export interface Film {
  id: string;
  title: string;
  year: string;
  role: string;
  runtime: string;
  genre: string;
  synopsis: string;
  posterUrl: string;
  stillUrls: string[];
  awards?: string[];
}

export interface StillImage {
  id: string;
  url: string;
  caption?: string;
  type: 'film' | 'art';
}

export interface NavItem {
  label: string;
  path: string;
}