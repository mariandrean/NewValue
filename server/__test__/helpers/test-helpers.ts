import moment from 'moment';

export const testUserAdmin = {
    "name": "newUser",
    "email": "newuser@gmail.com",
    "password": "Unacontraseña!1",
    "role": "admin"
}

export const testUser = {
    "name": "test",
    "email": "test@gmail.com",
    "password": "Unacontraseña!1"
}

export const deleteUser = {
    "name": "test",
    "email": "deletetest@gmail.com",
    "password": "Unacontraseña!1"
}

export const updatedTestUser = {
    "name": "updated Test",
    "email": "updatedtest@gmail.com",
    "password": "Unacontraseña!1"
}

const actualDate = moment().format('YYYY-MM-DD');
export const testNew = {
    "title": "testTitle",
    "subtitle": "testSubtitle",
    "content": "testContent",
    "category": "testCategory",
    "date": actualDate,
    "image": "http://www.imagen.com"
}

export const updatedTestNew = {
        "title": "updated testTitle",
        "subtitle": "updated testSubtitle",
        "content": "updated testContent",
        "category": "updated testCategory",
        "date": '2000-01-01',
        "image": "http://www.imagen.com"
}

export const loginUser = {
    "email": "test@gmail.com",
    "password": "Unacontraseña!1"
}