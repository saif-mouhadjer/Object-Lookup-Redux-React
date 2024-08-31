import { initialState } from "./initialState";
import { actionReducers } from "./listUserActionReducers";
import { typeAction } from "./type/typeAction";
import { TypeState } from "./type/typeState";

export const listUserReducer = (state : TypeState = initialState, action : typeAction ) => {
    const reducer = actionReducers[action.type];
    if (reducer) {
      return reducer(state, action);
    }
    return state;
  };
