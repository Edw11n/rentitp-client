import Axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class ApartmentListController {
    constructor() {
        this.apartmentList = [];
        this.loading = true;
    }

    async fetchApartments() {
        try {
        const response = await Axios.get(`${API_URL}/apartments/getapts`);
        
        console.log('Respuesta completa de la API:', response);

        if (!Array.isArray(response.data)) {
            throw new Error(`La API no devolvió un array. Respuesta: ${JSON.stringify(response.data)}`);
        }

        this.apartmentList = response.data.map(apt => ({
            ...apt,
            images: apt.images ? apt.images.split(',') : []
        }));
        this.loading = false;
        console.log('Apartamentos cargados:', this.apartmentList);
    } catch (error) {
        console.error('Error obteniendo apartamentos:', error);
        this.loading = false;
    }
}
}
export default ApartmentListController;
