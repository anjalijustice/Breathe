export default class UserService {
    static getUsers() {
        return fetch('https://breathe-api.herokuapp.com/users').then((users) => {return users.json()});
    }
    static getUser(installationId) {
        return fetch('https://breathe-api.herokuapp.com/users/' + installationId)
        .then(user => {return user.json()})
        .catch(error => {return null})
    }
    static createUser(user) {
        return fetch('https://breathe-api.herokuapp.com/users', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user
            }),
          })
          .then((user) => {return user.json()});
    }
}