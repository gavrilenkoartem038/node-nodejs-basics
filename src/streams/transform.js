
import { createWriteStream } from "fs";
import { stdin } from "process";
import { pipeline, Transform } from "stream";

const transform = async () => {
  const writable = process.stdin;
  const readable = process.stdout;

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const transformedString = String(chunk).trim().split('').reverse().join('') + '\n';
      callback(null, transformedString);
    }
  })

  pipeline(writable, transformStream, readable, (err) => console.log(err))
};

await transform();