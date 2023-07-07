import { IncomingMessage, ServerResponse }  from 'http';
import SuggestionService from '../services/SuggestionService';
import logger from '../utils/logger';

export default {
  async handleRequest(req: IncomingMessage, res: ServerResponse) {
    const { method, url } = req;

    const headers = {
      'Access-Control-Allow-Origin': 'http://localhost:3000', /* @dev First, read about security */
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': 2592000, // 30 days
      'Content-Type': 'application/json'
      /** add other headers as per requirement */
    };

    if (url === '/review/suggestions' && method === 'GET') {
      const suggestions = SuggestionService.getAll();
      logger.info(method+' '+200+` All suggestions queried.`);
      res.writeHead(200, headers);
      res.end(JSON.stringify(suggestions));
    }
    else {
      res.writeHead(404);
      res.end();
    }

  }
};
