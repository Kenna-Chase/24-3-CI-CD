const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should display "Hello World" on the main page', async () => {
        const response = await request(app).get('/');
        
        // Verifies the HTTP status code is 200 (OK)
        expect(response.statusCode).toBe(200);
        
        // Verifies that "Hello World" is exactly what is displayed
        expect(response.text).toBe('Hello World');
    });
});
