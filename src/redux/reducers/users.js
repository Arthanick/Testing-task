import update from 'immutability-helper';
import {NEW_USER, CURRENT_USER} from "../actions/users";

const initialState = {
    users: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER: {
            return update(state, {users: {$push: [{id: state.users.length + 1, ...action.user}]}});
        }
        case CURRENT_USER: {
            return update(state, {currentUser: {$set: action.id}});
        }
        default: return state;
    }
};