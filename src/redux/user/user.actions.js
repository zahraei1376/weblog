import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user,
});

export const setUserInfo = (user) =>({
    type:UserActionTypes.SET_USER_INFO,
    payload:user,
});