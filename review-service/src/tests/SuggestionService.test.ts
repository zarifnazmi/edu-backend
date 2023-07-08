import SuggestionService from '../services/SuggestionService';
import { okaySuggestions, awesomeSuggestions, emojis } from '../config/db';

test('getAll returns all suggestions', () => {
  const result = SuggestionService.getAll();
  const data = {okaySuggestions, awesomeSuggestions}
  expect(result).toStrictEqual(emojis);
});