import FeedbackService from '../services/FeedbackService';
import { feedbacks } from '../config/db';

test('queryAll returns all feedbacks', () => {
  const result = FeedbackService.getAll();
  expect(result).toBe(feedbacks);
});

test('create adds a feedback and returns it', () => {
  const newFeedback = { email: 'zarifnazmi@gmail.com', type: 'Test', comment: 'This is a test' };
  const result = FeedbackService.add(newFeedback);
  // expect(result).toBe(newFeedback);
  expect(feedbacks).toContain(newFeedback);
});