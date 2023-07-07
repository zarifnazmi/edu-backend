import { okaySuggestions, awesomeSuggestions } from '../config/db';
import { Suggestion } from '../models/Suggestion';

class SuggestionService {
  getAll(): Suggestion {
    return {
        okaySuggestions,
        awesomeSuggestions
    }
  }
  
}

export default new SuggestionService();
