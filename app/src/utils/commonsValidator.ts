import * as Joi from 'joi-i18n';
import { SchemaLike } from 'joi-i18n';

const schemaValidator = (body: unknown, schema: SchemaLike): unknown => {
  Joi.validate(body, schema, (err: Error) => {
    if (err) {
      throw err;
    }
  });
  return body;
};

export default schemaValidator;
