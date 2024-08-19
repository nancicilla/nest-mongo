import * as Joi from 'joi';
import { DEFAULT_MAX_VERSION } from 'tls';
export const JoiValidationSchema=Joi.object({
MONGODB: Joi.required(),
PORT: Joi.number().default(3002),
DEFAULT_LIMIT: Joi.number().default(5),
})