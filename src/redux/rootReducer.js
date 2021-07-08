import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session';

const ConfigPersist = {
    key:'root',
    storage: storage,
    whiteList:['user']
}

const RootReducer = combineReducers({
    user:UserReducer
});

export default persistReducer(ConfigPersist,RootReducer);