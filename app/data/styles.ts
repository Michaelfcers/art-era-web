export { STYLE_TRANSLATIONS } from './translations';

export interface ArtStyle {
  id: string;
  name: string;
  era: string;
  description: string;
  keyCharacteristics: string[];
  imageUrl: string;
}

// Local image paths inside public/images/styles/<id>.jpg for instant, reliable loading
export const REFERENCE_IMAGES: Record<string, string> = {
  abstract_expressionism: '/images/styles/abstract_expressionism.jpg',
  art_nouveau: '/images/styles/art_nouveau.jpg',
  baroque: '/images/styles/baroque.jpg',
  color_field: '/images/styles/color_field.jpg',
  cubism: '/images/styles/cubism.jpg',
  early_renaissance: '/images/styles/early_renaissance.jpg',
  expressionism: '/images/styles/expressionism.jpg',
  fauvism: '/images/styles/fauvism.jpg',
  high_renaissance: '/images/styles/high_renaissance.jpg',
  impressionism: '/images/styles/impressionism.jpg',
  mannerism: '/images/styles/mannerism.jpg',
  minimalism: '/images/styles/minimalism.jpg',
  naive_art: '/images/styles/naive_art.jpg',
  northern_renaissance: '/images/styles/northern_renaissance.jpg',
  pop_art: '/images/styles/pop_art.jpg',
  post_impressionism: '/images/styles/post_impressionism.jpg',
  realism: '/images/styles/realism.jpg',
  rococo: '/images/styles/rococo.jpg',
  romanticism: '/images/styles/romanticism.jpg',
  symbolism: '/images/styles/symbolism.jpg',
  ukiyo_e: '/images/styles/ukiyo_e.jpg'
};
