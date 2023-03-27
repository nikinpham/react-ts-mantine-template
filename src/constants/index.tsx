import { Path } from '@/config/path';
import { ILanguageConfig } from '@/interfaces/interfaceCommon';

import KOFlag from '@/assets/images/flag-south-korea.png';
import USAFlag from '@/assets/images/flag-usa.png';

export const MAIN_LINK = [
  { label: 'DASHBOARD.TITLE', path: Path.DASHBOARD },
  { label: 'EVENTS.TITLE', path: Path.EVENTS },
];

export const LANGUAGES: ILanguageConfig[] = [
  { lang: 'en', img: USAFlag, alt: 'USA flag', name: 'english' },
  { lang: 'ko', img: KOFlag, alt: 'Korea flag', name: 'korean' },
];
