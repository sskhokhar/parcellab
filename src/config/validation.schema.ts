import * as Joi from 'joi';

export const validationSchema = Joi.object({
  APP_ENVIRONMENT: Joi.string()
    .valid('production', 'development')
    .default('development'),
  PORT: Joi.number().port().default(3000),
  WEATHER_API: Joi.string().required(),
});
