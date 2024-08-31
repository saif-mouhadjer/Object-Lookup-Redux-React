import { fetchUsersFailureReducer } from "./reducer/fetchListeUsersFailureReducer";
import { fetchUsersRequestReducer } from "./reducer/fetchListeUsersRequestReducer ";
import { fetchUsersSuccessReducer } from "./reducer/fetchListeUsersSuccessReducer";



export const actionReducers = {
    'FETCH_USERS_REQUEST': fetchUsersRequestReducer,
    'FETCH_USERS_SUCCESS': fetchUsersSuccessReducer,
    'FETCH_USERS_FAILURE': fetchUsersFailureReducer,
  };

