import { customAlphabet } from 'nanoid';
export const generateAddress = () => {
  const nanoid = customAlphabet('123456789ABCDEFGHJKLMNPRSTUVWXYZ', 10);
  const address = nanoid();
  return `${address.slice(0, 5)}-${address.slice(5, 10)}`;
};
