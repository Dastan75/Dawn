import { userConstants } from '../_constants';

let savedUser = localStorage.getItem('user');
savedUser = JSON.parse(savedUser);
console.log('SAVED', savedUser);
const initialState = {
    loggedIn: false,

    // ...savedUser
};

export function user(state = initialState, action) {
    switch (action.type) {
    case userConstants.USER_SAVE_ONE:
        return {
            ...action.user,
            loggedIn: true
        };
    default:
        return state;
    }
}
