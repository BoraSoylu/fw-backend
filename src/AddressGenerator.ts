import { customAlphabet } from 'nanoid';
export const generateAddress = () => {
    const nanoid = customAlphabet('123456789ABCDEFGHJKLMNPRSTUVWXYZ', 10);
    return nanoid();
};
