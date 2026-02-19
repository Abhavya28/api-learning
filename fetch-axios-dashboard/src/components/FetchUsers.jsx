import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchApi";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError("Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading using Fetch...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users using Fetch</h2>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
};

export default FetchUsers;
