import { initialState } from "../initialState";
import { typeAction } from "../type/typeAction";
import { TypeState } from "../type/typeState";

export const fetchUsersRequestReducer = (state : TypeState = initialState, action : typeAction) => {
    return {
      ...state,
      loading: true,
    };
  };
