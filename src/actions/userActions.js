export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';

export function getUsers(users) {
    type: GET_USERS,
    users
}

export function getUser(user) {
    type: GET_USER,
    user
}

export function createUser(user) {
    type: CREATE_USER,
    user
}