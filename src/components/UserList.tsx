import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { typeUser } from "../redux/listeUser/type/typeUser";
import { fetchListUser } from '../redux/listeUser/reducer/fetchListeUsers';

const UserList: React.FC = () => {
  
  const users = useSelector((state: RootState) => state.UserList);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    fetchListUser(dispatch);
  }, [dispatch]);

  if (users.loading) return <p>Loading...</p>;
  if (users.error) return <p>Error: {users.error}</p>;
  if (!Array.isArray(users.users)) {
    return <p>No users available</p>;
  }

  return (
    <>
      <h1>list of users</h1>
      <ul>
        {users.users.map((user : typeUser) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
    
  );
};

export default UserList;