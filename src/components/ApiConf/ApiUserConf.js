import axios from "axios";

export const getUser = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postUser = async (newUser) => {
  try {
    const response = await axios.post("http://localhost:3000/users", newUser);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRequest = async () => {
  try {
    const response = await axios.delete("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateRequest = async (password) => {
  try {
    const response = await axios.patch("http://localhost:3000/users", password);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
