import type { Platform, LayoutMap } from './types';

/**
 * Determines if Mac layout should be used based on environment variable or platform
 */
export const isMacLayout = (platform: Platform): boolean => {
  const envVar = process.env.PSHE_ISMAC;
  if (envVar !== undefined) {
    return envVar === 'true' || envVar === '1';
  }
  return platform === 'darwin';
};

/**
 * Returns correspondence map between English and Russian layout
 */
export const getLayout = (platform: Platform): LayoutMap => {
  const isMac = isMacLayout(platform);

  const layout: LayoutMap = {
    й: 'q',
    ц: 'w',
    у: 'e',
    к: 'r',
    е: 't',
    н: 'y',
    г: 'u',
    ш: 'i',
    щ: 'o',
    з: 'p',
    х: '[',
    Х: '{',
    ъ: ']',
    ї: ']',
    Ъ: '}',
    Ї: '}',
    ф: 'a',
    ы: 's',
    і: 's',
    в: 'd',
    а: 'f',
    п: 'g',
    р: 'h',
    о: 'j',
    л: 'k',
    д: 'l',
    ж: ';',
    Ж: ':',
    э: "'",
    є: "'",
    Э: '"',
    Є: '"',
    ё: isMac ? '\\' : '`',
    Ё: isMac ? '|' : '~',
    я: 'z',
    ч: 'x',
    с: 'c',
    м: 'v',
    и: 'b',
    т: 'n',
    ь: 'm',
    б: ',',
    Б: '<',
    ю: '.',
    Ю: '>',
    '.': isMac ? '&' : '/',
    ',': isMac ? '^' : '?',
    '"': '@',
    '№': '#',
    ';': isMac ? '*' : '$',
    ':': isMac ? '%' : '^',
    '?': isMac ? '?' : '&',
    '/': isMac ? '|' : '/',
    '%': isMac ? '$' : '%',
    ']': '`',
    '[': '~',
    '<': isMac ? '±' : '<',
    '>': isMac ? '§' : '>',
  };

  const fullLayout = Object.keys(layout).reduce((acc, key) => {
    return {
      ...acc,
      [key.toUpperCase()]: layout[key].toUpperCase(),
      [key]: layout[key],
    };
  }, {} as LayoutMap);

  return fullLayout;
};

/**
 * Creates a function to convert strings from Russian to English
 */
export const createConverter = (layout: LayoutMap) => 
  (str: string): string => str.replace(/./g, (ch) => layout[ch] || ch);