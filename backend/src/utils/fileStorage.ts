import fs from 'fs';

export const readJSON = <T>(path: string): T => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data) as T;
};

export const writeJSON = <T>(path: string, data: T): void => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};