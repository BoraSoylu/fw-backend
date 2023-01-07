export type CreateWallet = {
    address: string;
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
