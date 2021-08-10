import axios from 'axios';
import API from '../utils/clientSecrets/openWeather';

export const fetchByCoords = async (lat, lon) => {
        const URL = `${API.BASE_URL}lat=${lat}&lon=${lon}${API.UNIT}${API.KEY}`;
        console.log("URL: ", URL);
        axios.get(URL)
        .then((response) => {
                console.log("response: ", response.data);
                let coords = { name: response.data.name, id: response.data.id }
                console.log("coords: ", coords);
                return coords;
        })
        .catch((error) => {
                console.log('error @axios.get(): ', error);
                return false;
        })
        .finally(() => {
                console.log('axios.get finally');
                // lets do nothing here for now 
        });
}

export const fetchById = (id) => {
        //build URL

        //axios.get(URL)
        //.then()
        //.catch()
}