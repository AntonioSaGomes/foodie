import axios from 'axios';
import {API_KEY} from '../constants';

const BASE_URL = 'https://api.spoonacular.com/recipes';

const getRecipes = async (searchTerm, page_size) => {
    const res = await axios.get(BASE_URL + '/search', {
        params: {
            apiKey: API_KEY,
            number: page_size,
            query: searchTerm
        }
    })
    return res?.data;
}

export default{
    getRecipes
}
