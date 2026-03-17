// A Users Page where data will only be visible when clicked on the button Load Users.

import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-2">
      <h1 className="text-black font-bold text-4xl">Users List</h1>

      <button onClick={loadUsers} className="bg-green-600 text-white p-2 rounded-lg">Load Users</button>

      {loading && <p>Loading Users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border border-gray-400 p-2">
            <h1 className="text-black font-bold text-lg">{user.name}</h1>
            <p className="text-gray-600 font-semibold">@{user.username}</p>
            <p>Email - {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
