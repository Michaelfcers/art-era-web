export { STYLE_TRANSLATIONS } from './translations';

export interface ArtStyle {
  id: string;
  name: string;
  era: string;
  description: string;
  keyCharacteristics: string[];
  imageUrl: string;
}

// Local WebP image paths inside public/images/styles/<id>.webp for instant, reliable loading
export const REFERENCE_IMAGES: Record<string, string> = {
  abstract_expressionism: '/images/styles/abstract_expressionism.webp',
  art_nouveau: '/images/styles/art_nouveau.webp',
  baroque: '/images/styles/baroque.webp',
  color_field: '/images/styles/color_field.webp',
  cubism: '/images/styles/cubism.webp',
  early_renaissance: '/images/styles/early_renaissance.webp',
  expressionism: '/images/styles/expressionism.webp',
  fauvism: '/images/styles/fauvism.webp',
  high_renaissance: '/images/styles/high_renaissance.webp',
  impressionism: '/images/styles/impressionism.webp',
  mannerism: '/images/styles/mannerism.webp',
  minimalism: '/images/styles/minimalism.webp',
  naive_art: '/images/styles/naive_art.webp',
  northern_renaissance: '/images/styles/northern_renaissance.webp',
  pop_art: '/images/styles/pop_art.webp',
  post_impressionism: '/images/styles/post_impressionism.webp',
  realism: '/images/styles/realism.webp',
  rococo: '/images/styles/rococo.webp',
  romanticism: '/images/styles/romanticism.webp',
  symbolism: '/images/styles/symbolism.webp',
  ukiyo_e: '/images/styles/ukiyo_e.webp'
};
