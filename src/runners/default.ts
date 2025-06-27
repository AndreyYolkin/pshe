import { spawn } from "node:child_process";
import { SPAWN_OPTIONS } from '../constants';

/**
 * Runs a command with given arguments
 */
export const runner = (command: string, args: string[]): void => {
  console.log(`$ ${command} ${args.join(' ')}\n`);
  spawn(command, args, SPAWN_OPTIONS);
};