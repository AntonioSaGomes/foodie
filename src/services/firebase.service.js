import "firebase/firestore";
import { collection, query, getCountFromServer, limit, getDocs, addDoc } from "firebase/firestore";  

export const getFavouriteRecipes = (db, max=4) => {
    const favourites = query(collection(db, "recipes"), limit(max));
    return getDocs(favourites);
}

export const addFavouriteRecipes = (db,recipe) => {
    return addDoc(collection(db, "recipes"),recipe);
}