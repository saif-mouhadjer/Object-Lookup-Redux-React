import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store';

export const fetchListUser = async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error: any) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};
