import axios from "axios";

export const getRequest = async () => {
  try {
    const response = await axios.get("http://localhost:3000/request");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postRequest = async (newRequest) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/request",
      newRequest
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRequest = async () => {
  try {
    const response = await axios.delete("http://localhost:3000/request");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateRequest = async () => {
  try {
    const response = await axios.delete("http://localhost:3000/request");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
