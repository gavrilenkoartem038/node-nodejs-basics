import { createReadStream, createWriteStream } from "fs";
import path, { dirname } from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import { createUnzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const source = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
  const destination = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const unzip = createUnzip();

    try {
      await pipeline(source, unzip, destination);
    } catch (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
};

await decompress();