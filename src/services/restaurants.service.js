import axios from 'axios';
import {API_KEY, SAN_FRANSCISCO_GEO} from '../constants';

const BASE_URL = 'https://api.spoonacular.com/food/restaurants';

const getRestaurants = async (searchTerm, page_size) => {
    const res = await axios.get(BASE_URL + '/search', {
        params: {
            apiKey: API_KEY,
            query: searchTerm
        }
    })
    return res?.data;
}

//Just North America
//SAN Franscico
const restaurantsNearBy = async(page_size=4) => {
    const URL = `https://api.spoonacular.com/food/restaurants/search?cuisine=italian&lat=34.7786357&lng=-122.3918135&apiKey=${API_KEY}`
/*     const res = await axios.get(BASE_URL + '/search', {
        params: {
            apiKey: API_KEY,

        }
    }); */
    const res = await axios.get(URL);
    return res?.data;
}


export default{
    getRestaurants,
    restaurantsNearBy
}