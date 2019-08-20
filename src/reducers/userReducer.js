import { GET_USERS, GET_USER, CREATE_USER } from 'breathe/src/actions/userActions';

export function userReducer(state = [], action) {
    switch (action.type) {
      case GET_USERS:
        return action.users;
      case GET_USER:
        return action.user;
      case CREATE_USER:
        return action.user;
      default:
        return state;
    }
  }
