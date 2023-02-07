import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const dirPath = join(__dirname, 'files');

  try {
    const files = await fs.readdir(dirPath);
    await files.forEach(file => console.log(file))
  } catch (error) {
    throw new Error('FS operation failed')
  }
};

await list();
