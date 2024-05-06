import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import UsersModel from '../models/UserModel';
import { testUserAdmin } from './helpers/test-helpers';
import { createToken } from '../utils/jwt';

const api = request(app);

describe('TESTING CRUD news',() => {
    let newUser: any = {};
    let userToken;

    beforeEach(async() => {
        newUser = await UsersModel.create(
        testUserAdmin
    );
    userToken = createToken(newUser);
    })
    afterEach(async() => {
        await UsersModel.destroy({ where: {id: newUser.id}})
    })
} )
