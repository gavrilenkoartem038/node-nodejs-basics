import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { stdin } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  try {
    const file = join(__dirname, 'files', 'fileToWrite.txt')
    const stream = createWriteStream(file);
    stdin.on('data', (chunk) => stream.write(chunk))
  } catch (error) {
    throw error;
  }
};

await write();