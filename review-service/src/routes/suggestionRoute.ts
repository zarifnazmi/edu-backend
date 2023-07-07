import { IncomingMessage, ServerResponse }  from 'http';
import SuggestionController from '../controllers/SuggestionController';

export default (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.endsWith('/suggestions')) {
    SuggestionController.handleRequest(req, res);
  }
};