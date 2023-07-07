import SuggestionService from '../services/SuggestionService';
import { okaySuggestions, awesomeSuggestions } from '../config/db';

test('getAll returns all suggestions', () => {
  const result = SuggestionService.getAll();
  const data = {okaySuggestions, awesomeSuggestions}
  expect(result).toStrictEqual(data);
});