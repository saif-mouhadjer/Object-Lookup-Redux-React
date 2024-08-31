import { combineReducers } from "redux";
import { listUserReducer } from './listeUser/listUserReducer';

const RootReducer = combineReducers({
    UserList : listUserReducer,
})

export default RootReducer