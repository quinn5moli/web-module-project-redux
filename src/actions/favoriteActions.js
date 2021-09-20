export const TOGGLE_FAVORITES_LIST = "TOGGLE_FAVORITES_LIST";
export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVORITES = "REMOVE_FAVORITES"

export const toggleFavoritesList = () => {
    return ({type: TOGGLE_FAVORITES_LIST});
}

export const addFavorites = (id) => {
    return ({type: ADD_FAVORITES, payload: id})
}

export const removeFavorites = (id) => {
    return ({type: REMOVE_FAVORITES, payload: id})
} 