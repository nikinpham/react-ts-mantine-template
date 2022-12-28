import { ILanguageConfig, TSupportedLangCode } from '@/interfaces/interfaceCommon';

import KOFlag from '@/assets/images/flag-south-korea.png';
import USAFlag from '@/assets/images/flag-usa.png';

export const defaultLanguage: TSupportedLangCode = 'en';

export const languageConfig: ILanguageConfig[] = [
  { lang: 'en', img: KOFlag, alt: 'Korea flag', tooltip: '한국어' },
  { lang: 'ko', img: USAFlag, alt: 'USA flag', tooltip: 'English' },
];
