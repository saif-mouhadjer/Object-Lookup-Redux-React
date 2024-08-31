import { initialState } from "../initialState";
import { typeAction } from "../type/typeAction";
import { TypeState } from "../type/typeState";

export const fetchUsersSuccessReducer = (state : TypeState = initialState, action : typeAction) => {
    return {
      ...state,
      loading: false,
      users: action.payload, 
      error: '', 
    };
  };