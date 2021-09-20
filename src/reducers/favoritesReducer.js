import { TOGGLE_FAVORITES_LIST, ADD_FAVORITES, REMOVE_FAVORITES } from "../actions/favoriteActions.js";

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case (TOGGLE_FAVORITES_LIST):
            return ({
                ...state,
                displayFavorites: !state.displayFavorites
            })
        case (ADD_FAVORITES):
            return ({
                ...state,
                favorites: [...state.favorites, action.payload]
            })
        case (REMOVE_FAVORITES):
            return ({
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            })
        default:
            return state;
    }
}

export default favoritesReducer;