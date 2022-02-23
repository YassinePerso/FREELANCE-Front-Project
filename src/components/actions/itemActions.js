import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEMS,
    TOGGLE_NAV,
    CLOSE_NAVBAR,
    BANNER_CLOSE,
    INCREASE_ITEM,
    DECREASE_ITEM,
    TOTAL_ITEMS,
    DETAILS
} from './types';


// for gettind the initial showing items
export const getItems = () => {
    return {
        type:GET_ITEMS,
    }
}

// apparition - disparition navbar
export const toggleNav = () => dispatch => {
    console.log(`clicked`);

    dispatch({
        type:TOGGLE_NAV
    })
}

// Closing nav bar
export const closeNavbar = () => dispatch => {

    console.log(`closed because it was open`);
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
