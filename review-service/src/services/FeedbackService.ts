import { Feedback } from '../models/Feedback';
import { feedbacks } from '../config/db';

class FeedbackService {
  getAll(): Feedback[] {
    return feedbacks;
  }

  add(feedback: Feedback): Feedback {
    feedbacks.push(feedback);
    return feedback;
  }
}

export default new FeedbackService();
