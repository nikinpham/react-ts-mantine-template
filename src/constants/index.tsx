import { Path } from '@/config/path';
import { Home, Settings } from 'tabler-icons-react';
import { ILanguageConfig } from '@/interfaces/interfaceCommon';

import KOFlag from '@/assets/images/flag-south-korea.png';
import USAFlag from '@/assets/images/flag-usa.png';

export const MAIN_LINK = [
  { icon: <Home size={16} />, color: 'blue', label: 'DASHBOARD.TITLE', path: Path.DASHBOARD },
  { icon: <Settings size={16} />, color: 'grape', label: 'SETTINGS.TITLE', path: Path.SETTINGS },
];

export const LANGUAGES: ILanguageConfig[] = [
  { lang: 'en', img: USAFlag, alt: 'USA flag', name: 'english' },
  { lang: 'ko', img: KOFlag, alt: 'Korea flag', name: 'korean' },
];
