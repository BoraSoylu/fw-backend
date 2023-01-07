import { customAlphabet } from 'nanoid';
export const generateAddress = () => {
  const nanoid = customAlphabet('g', 10);
  return nanoid();
};
