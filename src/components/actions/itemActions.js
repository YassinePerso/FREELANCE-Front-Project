import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEM,
    TOGGLE_NAV,
    CLOSE_NAVBAR,
    BANNER_CLOSE,
    INCREASE_ITEM,
    DECREASE_ITEM,
    TOTAL_ITEMS,
    DETAILS,
    ORDER,
} from './types';



// Order
export const order = () => {
    return {
        type:ORDER
    }
}

// for gettind the initial showing items
export const getItems = () => {
    return {
        type:GET_ITEMS,
    }
}

// apparition - disparition navbar
export const toggleNav = () => dispatch => {

    dispatch({
        type:TOGGLE_NAV
    })
}

// Closing nav bar
export const closeNavbar = () => dispatch => {

    dispatch({
        type:CLOSE_NAVBAR
    })
}

//Add to cart functionnality
export const AddToCart = (id) => dispatch => {

    dispatch({
        type:ADD_ITEMS,
        payload:id
    })
}


//close the banner
export const bannerClose = () => dispatch => {

    dispatch({
        type:BANNER_CLOSE,
    })
}

//Effacer les items depuis le panier
export const deleteItem = (id) => dispatch => {

    dispatch({
        type:DELETE_ITEM,
        payload:id
    })
}

//Augmenter le nombre d'items dans le panier 
export const increaseItem = (id) => dispatch => {

    // console.log'
    dispatch({
        type:INCREASE_ITEM,
        payload:id
    })
}

//Diminuer le nombre d'items dans le panier 
export const decreaseItem = (id) => dispatch => {

    dispatch({
        type:DECREASE_ITEM,
        payload:id
    })
}

//Calculer le total du panier
export const getTotals = () => dispatch => {

    dispatch({
        type:TOTAL_ITEMS,
    })
}

//Calculer le total du panier
export const getDetails = () => dispatch => {

    dispatch({
        type:DETAILS,
    })
}