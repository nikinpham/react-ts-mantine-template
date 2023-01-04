import { Path } from '@/config/path';
import { LazyExoticComponent } from 'react';

/**
 * Get all 'values' of `T` interface
 */
export type TypesOf<T> = T[keyof T];
export type Constructor<T> = { new (...args: any[]): T };

export interface IRoute {
  path: Path;
  component: LazyExoticComponent<() => JSX.Element>;
}

export type TSupportedLangCode = 'en' | 'ko';

export interface ILanguageConfig {
  lang: TSupportedLangCode;
  img: string;
  alt?: string;
  name: string;
}
