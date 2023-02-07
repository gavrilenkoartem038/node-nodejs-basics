import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldPath = join(__dirname, 'files', 'wrongFileName.txt');
  const newPath = join(__dirname, 'files', 'properFilename.md');

  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error('FS operation failed')
  }
};

await rename();