import { spawn } from "node:child_process";

export const SPAWN_OPTIONS = {
  stdio: 'inherit',
};

/**
 * Runs a command with given arguments
 * @param {string} command - The command to execute
 * @param {string[]} args - Array of command arguments
 * @returns {void}
 */
export const runner = (command, args) => {
  console.log(`$ ${command} ${args.join(' ')}\n`);
  spawn(command, args, SPAWN_OPTIONS);
};