import { env } from "process";

const parseEnv = () => {
  const envArr = Object.entries(env).filter((item) => item[0].startsWith('RSS_')).map((el) => {
    return `${el[0]}=${el[1]}`
  });
  console.log(envArr.join('; '))
};

parseEnv();