import moment from 'moment';


export const admin = {
    "name": "newUser",
    "lastname": "newUser",
    "email": "newuser@gmail.com",
    "password": "Unacontraseña!1",
    "role": "admin"
}
export const testUser = {
    "name": "test",
    "email": "test@gmail.com",
    "password": "Unacontraseña!1"
}
export const loginUser = {
    "email": "test@gmail.com",
    "password": "Unacontraseña!1"
}
const actualDate = moment().format('YYYY-MM-DD');
export const testNew = {
    "title": "titleTest",
    "subtitle": "subtitleTest",
    "content": "contentTest",
    "category": "categoryTest",
    "date": actualDate,
    "image": "http://www.imagen.com"
}
export const updatedTestNew = {
    "title": "updated titleTest",
    "subtitle": "subtitleTest",
    "content": "contentTest",
    "category": "categoryTest",
    "date": 2024-10-10,
    "image": "http://www.imagen.com"
}