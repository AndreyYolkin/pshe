/**
 * @typedef {Record<string, string>} LayoutMap
 * @typedef {'aix' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32'} Platform
 */

/**
 * Determines if Mac keyboard layout should be used
 * @param {Platform} platform - The operating system platform
 * @returns {boolean} True if Mac layout should be used, false otherwise
 */
export const isMacLayout = (platform) => {
  const envVar = process.env.PSHE_ISMAC;
  if (envVar !== undefined) {
    return envVar === 'true' || envVar === '1';
  }
  return platform === 'darwin';
};

/**
 * Returns correspondence map between English and Russian layout
 * @returns {LayoutMap}
 */
export const getLayout = (platform) => {
  const isMac = isMacLayout(platform);

  const layout = {
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
  }, {});

  return fullLayout;
};

/**
 * Creates a function to convert strings from Russian to English
 * @param {LayoutMap} layout
 */
export const createConverter = (layout) => 
  (str) => str.replace(/./g, (ch) => layout[ch] || ch);
