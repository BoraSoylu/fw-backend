import Joi from 'joi';

const currencies = [
    'btc',
    'eth',
    'ltc',
    'bch',
    'bnb',
    'eos',
    'xrp',
    'xlm',
    'link',
    'dot',
    'yfi',
    'usd',
    'aed',
    'ars',
    'aud',
    'bdt',
    'bhd',
    'bmd',
    'brl',
    'cad',
    'chf',
    'clp',
    'cny',
    'czk',
    'dkk',
    'eur',
    'gbp',
    'hkd',
    'huf',
    'idr',
    'ils',
    'inr',
    'jpy',
    'krw',
    'kwd',
    'lkr',
    'mmk',
    'mxn',
    'myr',
    'ngn',
    'nok',
    'nzd',
    'php',
    'pkr',
    'pln',
    'rub',
    'sar',
    'sek',
    'sgd',
    'thb',
    'try',
    'twd',
    'uah',
    'vef',
    'vnd',
    'zar',
    'xdr',
    'xag',
    'xau',
    'bits',
    'sats',
];

export const incomingWalletSchema = Joi.object({
    title: Joi.string().max(100).optional(),
    note: Joi.string().max(500).optional(),
    currency: Joi.any().valid(...currencies),
    contents: Joi.object()
        .pattern(
            Joi.string().regex(/^coin_[0-9]$/),
            Joi.object({
                id: Joi.string().required(),
                symbol: Joi.string().required(),
                name: Joi.string().required(),
                price: Joi.number().positive().required(),
                amount: Joi.number().positive().required(),
            }).required()
        )
        .min(1)
        .max(10)
        .required(),
});
