import { createServer, IncomingMessage, ServerResponse } from 'http';
import feedbackRoute from './routes/feedbackRoute';
import suggestionRoute from './routes/suggestionRoute';
import logger from './utils/logger';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
      if (req.url?.startsWith('/review')) {
        feedbackRoute(req, res);
        suggestionRoute(req, res);
      }
  });
  
  server.listen(8000, () => {
    logger.info('Review service listening on port 8000');
  });

  export default server;