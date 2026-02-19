export const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Fetch failed");
    return await res.json();
  } catch (error) {
    throw error;
  }
};
