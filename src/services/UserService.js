export default class UserService {
    static getUsers() {
        return fetch('http://127.0.0.1:8080/users').then((users) => {return users.json()});
    }
    static getUser(installationId) {
        return fetch('http://127.0.0.1:8080/users/' + installationId)
        .then(user => {return user.json()})
        .catch(error => {return null})
    }
    static createUser(user) {
      console.log(JSON.stringify({user}));
        return fetch('http://127.0.0.1:8080/users', {
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