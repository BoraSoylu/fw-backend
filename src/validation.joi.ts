import Joi from 'joi';

export const incomingWalletSchema = Joi.object({
  title: Joi.string().max(100).optional(),
  note: Joi.string().max(500).optional(),
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
