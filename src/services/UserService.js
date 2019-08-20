class UserService {
    getUsers() {
        fetch('/users').then((users) => {return users.json()});
    }
    getUser(id) {
        fetch('/users/id').then((user) => {return user.json()});
    }
    addUser(user) {
        fetch('/users', {
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