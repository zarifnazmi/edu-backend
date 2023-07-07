import { IncomingMessage, ServerResponse }  from 'http';
import FeedbackController from '../controllers/FeedbackController';

export default (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.endsWith('/feedbacks')) {
    FeedbackController.handleRequest(req, res);
  }
};