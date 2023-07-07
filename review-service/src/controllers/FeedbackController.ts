import { IncomingMessage, ServerResponse }  from 'http';
import FeedbackService from '../services/FeedbackService';
import validateInput from '../utils/validateInput';
import logger from '../utils/logger';

export default {
  async handleRequest(req: IncomingMessage, res: ServerResponse) {
    const { method, url } = req;

    let rule = {
      email: 'required|email',
      type: 'required',
      comment: 'string'
    };

    if (url === '/review/feedbacks' && method === 'GET') {
      const feedbacks = FeedbackService.getAll();
      logger.info(method+' '+200+` All feedbacks queried.`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(feedbacks));
    }

    if (url === '/review/feedbacks' && method === 'POST') {
      // Collect data sent in the request body
      validateInput(req, res, rule);
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
        FeedbackService.add(JSON.parse(body));
        logger.info(method+' '+201+` Feedbacks submitted.`);
        res.writeHead(201, {'Content-Type': 'text/plain'});
        res.end('Feedack submitted');
      });
    }
  }
};
