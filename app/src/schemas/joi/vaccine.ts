import Joi from 'joi';

const vaccineCreateSchema = Joi.object({
    description: Joi.string().required()
    
})