import type { Currency as CurrencyType } from '.prisma/client';

export type CreateWallet = {
    address: string;
    currency: CurrencyType;
    contents: {
        symbol: string;
        id: string;
        name: string;
        price: number;
        amount: number;
    }[];
    title: string | undefined;
    note: string | undefined;
};
