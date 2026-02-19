import { useEffect, useState } from "react";
import { axiosUsers } from "../api/axiosApi";

const AxiosUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosUsers()
      .then(setUsers)
      .catch(() => setError("Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading using Axios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users using Axios</h2>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
};

export default AxiosUsers;
