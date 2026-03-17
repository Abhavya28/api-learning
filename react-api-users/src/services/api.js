import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
