import { typeUser } from "./typeUser";

export interface TypeState {
    loading: boolean;
    users: Array <typeUser> ;
    error: string;
  }

  