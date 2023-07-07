import { IncomingMessage, ServerResponse }  from 'http';
import * as url from 'url';
import Validator, { Rules }  from 'validatorjs';
import logger from './logger';
import handleError from './handleError';

export default ( req: IncomingMessage, res: ServerResponse, validationRules: Rules) => {
    const queryObject = url.parse(req.url || '', true).query;

    const validation = new Validator(queryObject, validationRules);
    if (validation.fails()) {
        logger.error(req.method+' '+400+` Validation Errors: ${JSON.stringify(validation.errors.all())}`);
        handleError(req, res, 'Invalid data.', 400);
        return;
    }
};