import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import { testUser } from './helpers/test-helpers';


const api = request(app);

describe('REGISTER', () => {
    
    test('Register response body should return a token and status 201', async() => {
        const response = await api.post('/api/auth/register').send(
            testUser
        )
        expect(response.status).toBe(201)
    })
});


afterAll( async () => {
    server.close();
    await connection_db.sync({force: true });
    console.log('All databases are clean')
 });