import { okaySuggestions, awesomeSuggestions, emojis  } from '../config/db';
import { Suggestion } from '../models/Suggestion';
import logger from '../utils/logger';

class SuggestionService {
  getAll(): Suggestion[] {
    return emojis
  }
  
}

export default new SuggestionService();
