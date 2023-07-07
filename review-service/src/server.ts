import { createServer, IncomingMessage, ServerResponse } from 'http';
import feedbackRoute from './routes/feedbackRoute';
import suggestionRoute from './routes/suggestionRoute';
import logger from './utils/logger';
import { config } from "dotenv";

config();
const PORT: number = Number(process.env.PORT);

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith('/review')) {
    feedbackRoute(req, res);
    suggestionRoute(req, res);
  }
});

server.listen(PORT, () => {
  logger.info('Review service listening on port 8000');
});

export default server;