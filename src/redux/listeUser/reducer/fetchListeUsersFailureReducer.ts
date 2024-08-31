import { initialState } from "../initialState";
import { typeAction } from "../type/typeAction";
import { TypeState } from "../type/typeState";

export const fetchUsersFailureReducer = (state :  TypeState = initialState, action : typeAction) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  };