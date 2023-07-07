import { IncomingMessage, ServerResponse }  from 'http';
import FeedbackService from '../services/FeedbackService';
import validateInput from '../utils/validateInput';
import logger from '../utils/logger';
import { feedbacks } from '../config/db';

export default {
  async handleRequest(req: IncomingMessage, res: ServerResponse) {
    const { method, url } = req;

    let rule = {
      email: 'required|email',
      type: 'required',
      comment: 'string|nullable'
    };
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(method === 'OPTIONS') {
      // Pre-flight request. Reply successfully:
      res.writeHead(200);
      res.end();
      return;
  }

    else if (url === '/review/feedbacks' && method === 'GET') {
      const feedbacks = FeedbackService.getAll();
      logger.info(method+' '+200+` All feedbacks queried.`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(feedbacks));
    }

    else if (url === '/review/feedbacks' && method === 'POST') {
      // Collect data sent in the request body
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', () => {
          const feedback = JSON.parse(body);
          validateInput(req, res, feedback, rule, () => {
            FeedbackService.add(JSON.parse(body));
            logger.info(method+' '+200+` Feedbacks submitted.`);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Data received successfully'}));
          })
        });
    }
    else {
      res.writeHead(404);
      res.end();
    }
  }
};