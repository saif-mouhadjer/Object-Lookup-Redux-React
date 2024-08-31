export interface typeAction {
    type: 'FETCH_USERS_REQUEST' | 'FETCH_USERS_SUCCESS' | 'FETCH_USERS_FAILURE';
    payload?: any;
  }