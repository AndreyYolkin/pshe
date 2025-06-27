import { tokenizeArgs } from 'args-tokenizer'

/**
 * Parses a string of command line arguments into an array of individual arguments.
 * 
 * @param {string} value - The raw command line arguments string to parse
 * @returns {string[]} An array of parsed argument strings
 */
export const parseArgs = (value) => {
  return tokenizeArgs(value)
};