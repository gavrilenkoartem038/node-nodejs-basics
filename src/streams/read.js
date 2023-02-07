import { createReadStream } from "fs";
import { dirname, join } from "path";
import { stdout } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    const file = join(__dirname, 'files', 'fileToRead.txt')
    const stream = createReadStream(file);
    stream.on('data', (chunk) => stdout.write(chunk))
  } catch (error) {
    throw error;
  }
};

await read();