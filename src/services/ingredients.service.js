import axios from 'axios';
import {API_KEY} from '../constants';

const BASE_URL = 'https://api.spoonacular.com/food/ingredients';

const getIngredients = async (searchTerm, page_size=4) => {
    const res = await axios.get(BASE_URL + '/search', {
        params: {
            apiKey: API_KEY,
            number: page_size,
            query: searchTerm
        }
    })
    return res?.data;
}

const getAutoCompleteIngredients = async (searchTerm, page_size=3) => {
    const res = await axios.get(BASE_URL + '/autocomplete', {
        params: {
            apiKey: API_KEY,
            number: page_size,
            query: searchTerm
        }
    })
    return res?.data;
}

export default{
    getIngredients,
    getAutoCompleteIngredients
}