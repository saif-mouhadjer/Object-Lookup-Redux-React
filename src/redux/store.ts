import { AnyAction, applyMiddleware, createStore } from 'redux'
import { thunk, ThunkDispatch } from 'redux-thunk';
import RootReducer from './RootReducer';
 

export type RootState = ReturnType < typeof RootReducer >
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const store = createStore( RootReducer , {}, applyMiddleware(thunk) ); 


export default store