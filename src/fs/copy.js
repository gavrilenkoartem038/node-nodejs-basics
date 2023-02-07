import fs from 'fs/promises'
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const dirPath = join(__dirname, 'files');
  const copyPath = join(__dirname, 'files_copy');

  try {
    await fs.cp(dirPath, copyPath, {errorOnExist: true, force: false, recursive: true})
  } catch (error) {
    throw new Error('FS operation failed')
  }
};

await copy();
