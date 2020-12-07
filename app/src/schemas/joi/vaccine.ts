import Joi from 'joi-i18n';

const vaccineCreateSchema = Joi.object({
  name: Joi.string().max(40).required(),
  description: Joi.string().max(100).required(),
});

export default vaccineCreateSchema;
