import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  try {
    const hash = createHash('sha256');
    const data = await readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    hash.update(data);
    console.log(hash.digest('hex'))
  } catch (error) {
    throw error;
  }
};

await calculateHash();