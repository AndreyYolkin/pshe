import { getLayout, createConverter } from './layout';
import { parseArgs } from './parser';
import { runner } from './runners';
import { SupportedBin } from './types';

/**
 * Runs cli
 */
export const run = (bin: SupportedBin): void => {
  const [, , ...args] = process.argv;
  const joinedArgs = args.join(' ');

  const convert = createConverter(getLayout(process.platform));
  const convertedArgs = convert(joinedArgs);
  const parsedArgs = parseArgs(convertedArgs);

  switch (bin) {
    case 'git':
      runner(bin, parsedArgs);
      break;
  }
};
