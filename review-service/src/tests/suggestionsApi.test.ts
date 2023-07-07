import request from 'supertest';
import server from '../server';
import { okaySuggestions, awesomeSuggestions } from '../config/db';

describe('GET /review/suggestions', () => {
    it('responds with suggesstions data!', async () => {
      const response = await request(server).get('/review/suggestions');
      const data = {okaySuggestions, awesomeSuggestions}
      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual(data);
    });
    
    // negative test
    it('responds with error when requested non-existing endpoint', async () => {
      const response = await request(server).get('/review/suggestion');
      expect(response.status).toBe(500);
    });
  });