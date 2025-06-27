import { tokenizeArgs } from 'args-tokenizer'

/**
 * Parses arguments string into array of arguments
 * Handles quoted strings and escaped characters
 */
export const parseArgs = (value: string): string[] => {
  return tokenizeArgs(value)
};