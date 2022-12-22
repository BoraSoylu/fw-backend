import Joi from 'joi';

export const incomingWalletSchema = Joi.object({
  title: Joi.string().max(100).required(),
  note: Joi.string().max(500).required(),
  contents: Joi.object()
    .pattern(
      Joi.string(),
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
