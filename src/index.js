import { getLayout, createConverter } from './layout.js';
import { parseArgs } from './parser.js';
import { runner } from './runner.js';

/**
 * Runs cli
 * 
 * @param {string} bin - The name of the binary to run
 */
export const run = (bin = 'git') => {
  const [, , ...args] = process.argv;
  const joinedArgs = args.join(' ');

  const convert = createConverter(getLayout(process.platform));
  const convertedArgs = convert(joinedArgs);
  const parsedArgs = parseArgs(convertedArgs);

  runner(bin, parsedArgs);
};
