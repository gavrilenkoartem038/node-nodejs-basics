import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const fileContent = await fs.readFile(filePath, {encoding: 'utf-8'});
    console.log(fileContent)
  } catch (error) {
    throw new Error('FS operation failed')
  }
};

await read();
