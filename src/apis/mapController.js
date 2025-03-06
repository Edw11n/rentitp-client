import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// Función para obtener los apartamentos
const fetchApartments = async () => {
    try {
        console.log(`API_URL ${API_URL}`);
        const response = await axios.get(`${API_URL}/apartments/getMarkersInfo`);
        return response.data; // Retorna los datos de los apartamentos
    } catch (error) {
        console.error('Error obteniendo los apartamentos', error);
        throw error; // Propaga el error
    }
};

export default fetchApartments;
