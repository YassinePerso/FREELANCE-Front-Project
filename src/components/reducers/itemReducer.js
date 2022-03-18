import {
    // ADD_TO_LOCALSTORAGE,
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEM,
    // TOGGLE_NAV,
    // CLOSE_NAVBAR,
    // BANNER_CLOSE,
    INCREASE_ITEM,
    DECREASE_ITEM,
    TOTAL_ITEMS,
    DETAILS
} from '../actions/types';


export const initialState = {
    items:[
  // HUILE CALMANTE //
  {
    _id: 1,
    url: "HuileCalmante",
    page_position: "first",
    page_category: "Huile",
    title: "Huile Calmante 1",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "5%",
    composition: "Base MCT et CBD seul",
    contenance: "5ml",
    gout: "Neutre",
    prix: 38.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 2,
    url: "HuileCalmante",
    page_category: "Huile",
    title: "Huile Calmante 2",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT et CBD seul",
    contenance: "15ml",
    gout: "Neutre",
    prix: 59.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 3,
    url: "HuileCalmante",
    page_category: "Huile",
    subCategory: "huileCalmante",
    title: "Huile Calmante 3",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "15%",
    composition: "Base MCT et CBD seul",
    contenance: "15ml",
    gout: "Neutre",
    prix: 89.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
    // HUILE RELAXANTE //
{
    _id: 4, 
    url: "HuileRelaxante",
    page_position: "first",
    page_category: "Huile",
    title: "Huile Relaxante 1",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "5%",
    composition: "Base MCT et CBD + CBG",
    contenance: "10ml",
    gout: "Neutre",
    prix: 39.90,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 5, 
    url: "HuileRelaxante",
    page_category: "Huile",
    title: "Huile Relaxante 2",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT et CBD seul",
    contenance: "10ml",
    gout: "Neutre",
    prix: 49.90,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 6, 
    url: "HuileRelaxante",
    page_category: "Huile",
    title: "Huile Relaxante 3",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "15%",
    composition: "Base MCT et CBD seul",
    contenance: "10ml",
    gout: "Neutre",
    prix: 69.90,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
// HUILE ANTI-STRESS //
{
    _id: 7, 
    url: "HuileAntiStress",
    page_position: "first",
    page_category: "Huile",
    title: "Huile Anti-Stress",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT et CBD seul",
    contenance: "10ml",
    gout: "Neutre",
    prix: 49.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
// HUILE ANTI-DOULEUR //
{
    _id: 8, 
    url: "HuileAntiDouleur",
    page_position: "first",
    page_category: "Huile",
    title: "Huile Anti-douleur 1",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT, CBD + CBG",
    contenance: "10ml",
    gout: "Citron Vert",
    prix: 59.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 9, 
    url: "HuileAntiDouleur",
    page_category: "Huile",
    title: "Huile Anti-douleur 2",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT, CBD + CBG",
    contenance: "20ml",
    gout: "Fraise",
    prix: 59.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 10, 
    url: "HuileAntiDouleur",
    page_category: "Huile",
    title: "Huile Anti-douleur 3",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT, CBD + CBG",
    contenance: "20ml",
    gout: "Neutre",
    prix: 59.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
////// Thé //////
{
    _id: 11, 
    url: "urlThé",
    page_position: "first",
    page_category: "The",
    title: "Infusion CBD Vitalité",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10% de fleurs ",
    composition: "Neutre",
    gout: "Neutre",
    prix: 14.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 12, 
    url: "urlThé",
    page_position: "first",
    page_category: "The",
    title: "Infusion CBD Digestion ",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10% de fleurs ",
    composition: "Mélisse, Verveine",
    gout: "Mélisse, Verveine",
    prix: 14.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 13, 
    url: "urlThé",
    page_position: "first",
    page_category: "The",
    title: "Thé Anti-Stress",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "5% de fleurs ",
    composition: "Thé vert, Menthe, Citron",
    gout: "Menthe, Citron",
    prix: 13.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
// AUTRE (bonbon) //
{
    _id: 14, 
    subPage: "SubAutre",
    page_position: "first",
    page_category: "Autre",
    title: "Gummies CBD 1",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "<2%",
    composition: "Vegan Mixed Fruits",
    contenance: "60 gummies",
    gout: "Mixed Fruits",
    prix: 34.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 15, 
    page_category: "Autre",
    title: "Gummies CBD 2",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "<2%",
    composition: "Vegan Strawberry",
    contenance: "60 gummies",
    gout: "Strawberry",
    prix: 34.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
{
    _id: 16, 
    subPage: "SubAutre",
    page_position: "first",
    page_category: "Autre",
    title: "Bonbons colorés",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "2.50%",
    composition: "Vegan",
    contenance: "30 gummies",
    gout: "Neutre",
    prix: 29.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
    // isInCart: false
},
    ],
    cart: [],
    isOpen: false,
    total: 0,
    shipping: 10
};



const Todos = (state = initialState, action) => {

    switch(action.type) {


        // Récupérer le state initial
        case GET_ITEMS:
             return {
                 ...state
             }
             // TOGGLE navigation APPARITION
        // case TOGGLE_NAV:
        //      return {
        //          ...state,
        //          isOpen:!state.isOpen
        //      }
             //close navbar
        // case CLOSE_NAVBAR:
        //     if (state.isOpen === true) {
        //         return {
        //             ...state,
        //             isOpen:false
        //         }
        //     }
            //Add To Cart functionnality
        // eslint-disable-next-line no-fallthrough
        case ADD_ITEMS:

        let check = state.cart.find(item => item._id === action.payload);

        if (!check) {
            // bringing only the items that match the id 
            let items = state.items.filter(item => item._id === action.payload)
            let itemsCart = [...state.cart, ...items]

            return {
                ...state,
                cart:itemsCart
            }
        }

        else {
            let items = state.items.filter(item => item._id === action.payload);
            items.forEach(item => {
                item.isInCart = true
                // alert('Deja dans le panier')
            })

            return {
                ...state
            }
        }

        //Close the banner 
        // case BANNER_CLOSE:
        //     state.items.forEach(item => {
        //         item.isInCart = false
        //     })

        //     return {
        //         ...state
        //     }

        //Effacer le item
        case DELETE_ITEM:

        const filteredCart = state.cart.filter(item => item._id !== action.payload);
            return {
                ...state,
                cart:filteredCart
            }

        //Augmenter le nombre d'articles
        case INCREASE_ITEM:
            let incResults = state.cart.map(item => {
                if (item._id === action.payload) {
                    item = {...item, count:item.count + 1}
                }
                return item
            })

            return {
                ...state,
                cart:incResults
            }

        //Diminuer le nombre d'articles
        case DECREASE_ITEM:
            let decResults = state.cart.map(item => {
                if (item._id === action.payload) {
                    item = {...item, count:item.count === 1 ? item.count = 1:item.count -1}
                }
                return item
            })
            // let decResultsF
            return {
                ...state,
                cart:decResults
            }

        // Total du panier
        case TOTAL_ITEMS:

        const totals = state.cart.reduce((prev, item) => {
            return prev + (item.prix * item.count)
        }, 0)
            const totalsFixed = totals.toFixed(2);
          return {
              ...state,
              total:totalsFixed
          }

        // Details Page
        case DETAILS:
            return {
                ...state,
            }


        // eslint-disable-next-line no-fallthrough
        default:
             return state
    }


}
export default Todos;