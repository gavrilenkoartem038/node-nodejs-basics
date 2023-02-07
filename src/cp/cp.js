import { fork } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const parengPath = join(__dirname, 'files', 'script.js');

  fork(parengPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['d', 'd', 'ddd']);
