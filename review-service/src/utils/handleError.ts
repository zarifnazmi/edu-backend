import { IncomingMessage, ServerResponse }  from 'http';
import logger from './logger';

export default ( req: IncomingMessage, res: ServerResponse, message: string, statusCode: number) => {
    logger.error(req.method+' '+statusCode || 500+` `+message);
    res.writeHead(statusCode || 500, {'Content-Type': 'text/plain'});
    res.end(message);
};