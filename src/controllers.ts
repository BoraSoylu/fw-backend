import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response, Router } from 'express';
import { incomingWalletSchema } from './validation.joi';
import { generateAddress } from './AddressGenerator';
import { CreateWallet } from './types';
import type { Currency as CurrencyType } from '.prisma/client';
export const router: Router = Router();

const prisma = new PrismaClient();

router.use((req, res, next) => {
    console.log('----------- NEW REQUEST -----------');
    next();
});

router.get('/wallet', async (req: Request, res: Response, next: NextFunction) => {
    // Get wallet address from query params
    const incomingAddress = req.query.address?.toString();

    try {
        // If address missing, throw error
        if (incomingAddress === null || incomingAddress === undefined) {
            res.status(400);
            throw new Error('Missing parameter: Wallet Address');
        }

        // If address is in wrong format, throw error
        if (!/^[123456789ABCDEFGHJKLMNPRSTUVWXYZ]{10}$/.test(incomingAddress)) {
            res.status(400);
            throw new Error('Wrong parameter format: Wallet Address (Must be 10 character string)');
        }

        // Try to get wallet from database
        const wallet = await prisma.wallet.findFirst({
            where: {
                address: incomingAddress,
            },
            select: {
                address: true,
                title: true,
                note: true,
                createdAt: true,
                contents: true,
            },
        });

        // If wallet not found, throw error
        if (wallet === null) {
            res.status(404);
            throw new Error(`Wallet with address '${incomingAddress}' not found`);
        } else {
            // If found send wallet to user.
            res.send(wallet);
        }
    } catch (error: unknown) {
        // If custom error, send error
        if (error instanceof Error) {
            res.send({ message: error.message });
        } else {
            // If unknown error, send error
            // TODO - I probably should have logging here
            res.status(520).send(error);
        }
    }
});

//TODO - Add comments
router.post('/wallet', async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = await incomingWalletSchema.validate(req.body);
    console.log(`post request: ${value}`);
    try {
        if (error) {
            res.status(422);

            throw new Error(error.message);
        }

        const wallet: CreateWallet = {
            address: generateAddress(),
            contents: value.contents,
            title: value.title ? value.title : null,
            note: value.note ? value.note : null,
            currency: value.currency,
        };
        await prisma.wallet.create({ data: wallet });
        res.send(wallet);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log('error here');
            res.status(520);
            res.send({ message: error.message });
        } else {
            res.status(520).send(error);
        }
    }
});

// TODO
router.get('/email', (req: Request, res: Response, next: NextFunction) => {
    console.log('Hit router.get');
    res.send('Express + TypeScript Server');
});

// TODO
router.post('/email', (req: Request, res: Response, next: NextFunction) => {
    console.log('Hit router.post');
    res.send('Express + TypeScript Server');
});

// TODO
router.delete('/email', (req: Request, res: Response, next: NextFunction) => {
    console.log('Hit router.delete');
    res.send('Express + TypeScript Server');
});
