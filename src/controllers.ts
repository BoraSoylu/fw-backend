import { PrismaClient } from '@prisma/client';
import express, { Express, NextFunction, Request, Response, Router } from 'express';
import { incomingWalletSchema } from './validation.joi';
import { generateAddress } from './AddressGenerator';
import { CreateWallet } from './types';
import { Responses } from 'swagger-jsdoc';

export const router: Router = Router();

const prisma = new PrismaClient();

router.use((req, res, next) => {
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    next();
});

router.get('/wallet', async (req: Request, res: Response, next: NextFunction) => {
    const incomingAddress = req.query.address;

    try {
        if (typeof incomingAddress !== 'string') {
            throw new Error('Wrong params');
        }
        if (!/^[123456789ABCDEFGHJKLMNPRSTUVWXYZ]{10}$/.test(incomingAddress)) {
            throw new Error('Wrong address format');
        }
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
        if (wallet === null) {
            console.log(wallet);
            res.status(404).send('Wallet not found');
        }
        res.send(wallet);
    } catch (error) {
        res.send(error);
    }
});

router.post('/wallet', async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = await incomingWalletSchema.validate(req.body);
    if (error) {
        res.send(error);
        next();
    }

    const wallet: CreateWallet = {
        address: generateAddress(),
        contents: value.contents,
        title: value.title ? value.title : null,
        note: value.note ? value.note : null,
    };
    console.log(wallet);
    res.send(wallet);

    prisma.wallet.create({ data: wallet }).then((data) => {
        res.send(wallet);
    });
});

router.get('/email', (req: Request, res: Response, next: NextFunction) => {
    console.log('Hit router.get');
    res.send('Express + TypeScript Server');
});

router.post('/email', (req: Request, res: Response, next: NextFunction) => {
    console.log('Hit router.post');
    res.send('Express + TypeScript Server');
});

router.delete('/email', (req: Request, res: Response, next: NextFunction) => {
    console.log('Hit router.delete');
    res.send('Express + TypeScript Server');
});
