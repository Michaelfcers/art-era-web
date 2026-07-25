export { STYLE_TRANSLATIONS } from './translations';

export interface ArtStyle {
  id: string;
  name: string;
  era: string;
  description: string;
  keyCharacteristics: string[];
  imageUrl: string;
}

export const REFERENCE_IMAGES: Record<string, string> = {
  abstract_expressionism: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
  art_nouveau: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  baroque: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
  color_field: 'https://images.unsplash.com/photo-1550684848-bac1c5b4e853?auto=format&fit=crop&w=800&q=80',
  cubism: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80',
  early_renaissance: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80',
  expressionism: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=800&q=80',
  fauvism: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=800&q=80',
  high_renaissance: 'https://images.unsplash.com/photo-1579783901586-d88272d83723?auto=format&fit=crop&w=800&q=80',
  impressionism: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
  mannerism: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  minimalism: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
  naive_art: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=800&q=80',
  northern_renaissance: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80',
  pop_art: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
  post_impressionism: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
  realism: 'https://images.unsplash.com/photo-1579783901586-d88272d83723?auto=format&fit=crop&w=800&q=80',
  rococo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  romanticism: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
  symbolism: 'https://images.unsplash.com/photo-1579783901586-d88272d83723?auto=format&fit=crop&w=800&q=80',
  ukiyo_e: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'
};
