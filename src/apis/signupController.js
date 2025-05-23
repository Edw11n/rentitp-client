import Axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const signupUser = async (userData) => {
    try {
        console.log("API_URL:", API_URL);
        await Axios.post(`${API_URL}/lessors/signup`, userData);
        return { success: true };
    } catch (error) {
        console.error("Hubo un error registrando los datos", error);
        return { success: false, message: "Hubo un error registrando los datos" };
    }
};
