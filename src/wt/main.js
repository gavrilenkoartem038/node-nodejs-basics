import os from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const cores = os.cpus();
  const workerPath = path.join(__dirname, 'worker.js')

  const result = cores.map((_, index) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: 10 + index,
      })
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    })
  })
  const resultPromisesArr = await Promise.allSettled(result);
  const resultArr = resultPromisesArr.map(({status, value}) => {
    return {
      status: status === 'fulfilled' ? 'resolve' : 'reject',
      data: value ? value : null,
    }
  })
  console.log(resultArr);
};

await performCalculations();