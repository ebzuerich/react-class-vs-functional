import { englishTranslation } from '../config/en';

export interface Translation {
  language: string;
  messages: { [key: string]: string };
}

export const initialTranslation: Translation = englishTranslation;