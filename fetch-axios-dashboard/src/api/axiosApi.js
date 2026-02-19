import axios from "axios";

export const axiosUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    throw error;
  }
};
