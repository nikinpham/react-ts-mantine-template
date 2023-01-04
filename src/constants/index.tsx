import { Path } from '@/config/path';
import { ILanguageConfig } from '@/interfaces/interfaceCommon';
import { Certificate, Home, PlugConnected } from 'tabler-icons-react';

import KOFlag from '@/assets/images/flag-south-korea.png';
import USAFlag from '@/assets/images/flag-usa.png';

export const MAIN_LINK = [
  { icon: <Home size={16} />, color: 'blue', label: 'DASHBOARD.TITLE', path: Path.DASHBOARD },
  {
    icon: <PlugConnected size={16} />,
    color: 'green',
    label: 'TLS_COMMUNICATIONS.TITLE',
    path: Path.TLS_COMMUNICATIONS,
  },
  {
    icon: <Certificate size={16} />,
    color: 'red',
    label: 'CERTIFICATES.TITLE',
    path: Path.CERTIFICATES,
  },
  // { icon: <Settings size={16} />, color: 'grape', label: 'SETTINGS.TITLE', path: Path.SETTINGS },
];

export const LANGUAGES: ILanguageConfig[] = [
  { lang: 'en', img: USAFlag, alt: 'USA flag', name: 'english' },
  { lang: 'ko', img: KOFlag, alt: 'Korea flag', name: 'korean' },
];
