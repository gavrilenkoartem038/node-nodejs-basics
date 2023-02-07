import { createReadStream, createWriteStream } from "fs";
import path, { dirname } from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const source = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const destination = createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    const gzip = createGzip();

    try {
      await pipeline(source, gzip, destination);
    } catch (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
};

await compress();