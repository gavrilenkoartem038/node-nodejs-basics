import { argv } from "process";

const parseArgs = () => {
    const res = []
    for(let i = 2; i < argv.length; i+= 2) {
      res.push(`${argv[i].slice(2)} is ${argv[i+1]}`)
    }
    console.log(res.join(', '))
};

parseArgs();