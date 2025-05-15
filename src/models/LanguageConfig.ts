export type TextDirection = 'ltr' | 'rtl';

export interface LanguageConfig {
  baseLanguage: string;
  direction: TextDirection;
  showFocusOutline: boolean;
  skipToContentLink: boolean;
  reduceMotion: boolean;
}