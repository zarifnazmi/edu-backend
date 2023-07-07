import { IncomingMessage, ServerResponse }  from 'http';
import * as url from 'url';
import Validator, { Rules }  from 'validatorjs';
import logger from './logger';
import handleError from './handleError';

export default ( req: IncomingMessage, res: ServerResponse, body: any, validationRules: Rules, next: () => void) => {
    const validation = new Validator(body, validationRules);

    if (validation.fails()) {
      logger.error(req.method + ' ' + 400 + ` Validation Errors: ${JSON.stringify(validation.errors.all())}`);
      handleError(req, res, 'Invalid data.', 400);
      return;
    }

    next();
};