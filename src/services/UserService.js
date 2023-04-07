import { API_URL } from './contants';

export default class UserService {
    static getUsers() {
        return fetch(`${API_URL}/users`)
          .then((users) => {return users.json()})
          .catch((e) => console.log(e));
    }
    static getUser(installationId) {
        return fetch(`${API_URL}/users/${installationId}`)
        .then(user => {return user.json()})
        .catch((e) => console.log(e));
    }
    static createUser(user) {
        return fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user
            }),
          })
          .then((user) => {return user.json()})
          .catch((e) => console.log(e));
    }
}