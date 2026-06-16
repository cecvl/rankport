export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  colorClass: string; // Tailwinds colors: e.g. bg-earth-sage
  accentColor: string; // Hex color code
  year: string;
}

export interface Section {
  id: string;
  label: string;
  color: string;
}
