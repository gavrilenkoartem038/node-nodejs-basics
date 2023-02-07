import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');
    
    try {
      await fs.unlink(filePath);
    } catch (error) {
      throw new Error('FS operation failed')
    }
};

await remove();
