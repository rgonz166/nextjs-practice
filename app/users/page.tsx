import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
};

export default UsersPage;
