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

export const deleteUser = async () => {
  try {
    const response = await axios.delete("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (password) => {
  try {
    const response = await axios.patch("http://localhost:3000/users", password);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const verifyUser = async (loginEmail, loginPass) => {
  // Aqui llamas a la API y compruebas que el usuario existe
  try {
    const { data } = await axios.get(
      `http://localhost:3000/users/${loginEmail}`
    );

    // Comprobar que la contraseña sea o no y si lo es , retornar el usuario.

    if (!(loginPass === data.password)) return false;
    return data;
  } catch (error) {
    console.error("error:", error);
  }
};
