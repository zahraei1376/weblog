import { UserActionTypes } from './user.types';

const INITIALSTATE = {
    currentUser:null,
    userInfo: null,
}

const UserReducer = (state=INITIALSTATE , action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload,
            }

        case UserActionTypes.SET_USER_INFO:
            return {
                ...state,
                userInfo:action.payload,
            } 

        default:
            return state;
    }
};

export default UserReducer;