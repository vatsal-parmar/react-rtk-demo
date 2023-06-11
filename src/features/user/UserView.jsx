import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const usersData = useSelector((state) => state.user);

  return (
    <div>
      <h2>List of Users</h2>
      {usersData.loading && <p>Loading ...</p>}
      {!usersData.loading && usersData.error ? (
        <p>Error : {usersData.error}</p>
      ) : null}
      {!usersData.loading && usersData.users.length > 0 ? (
        <ul>
          {usersData.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
