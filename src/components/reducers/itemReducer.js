import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEM,
    INCREASE_ITEM,
    DECREASE_ITEM,
    TOTAL_ITEMS,
    DETAILS
} from '../actions/types';


export const initialState = {
    items:[
  {
    _id: 1,
    url: "XXXXXXXXXXXXXXXXXX",
    page_position: "first",
    page_category: "XXXXXXX",
    title: "XXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 2,
    url: "XXXXXXXXXXXXXXX",
    page_category: "Huile",
    title: "XXXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 3,
    url: "XXXXXXXXXXXXX",
    page_category: "XXXXXXX",
    subCategory: "XXXXXXXXXXXXXXX",
    title: "XXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "15%",
    composition: "XXXXXXXXXXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 4, 
    url: "XXXXXXXXXXXXXX",
    page_position: "first",
    page_category: "XXXXXXXXX",
    title: "XXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXXXXXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXXXXXX",
    prix: XX.XX,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 5, 
    url: "XXXXXXXXXXXXXXXXX",
    page_category: "XXXXXXXX",
    title: "XXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXXXXXXXXXXXXXXX",
    contenance: "XXml",
    gout: "XXXXXXXX",
    prix: XX.XX,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 6, 
    url: "XXXXXXXXXXXXXXXXXXXX",
    page_category: "XXXXXXX",
    title: "XXXXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXX%",
    composition: "XXXXXXXXXXXXXXXXXX",
    contenance: "XXml",
    gout: "XXXXXXX",
    prix: XX.XX,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 7, 
    url: "XXXXXXXXXXXXXX",
    page_position: "first",
    page_category: "XXXXX",
    title: "XXXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXX%",
    composition: "XXXXXXXXXXXXXXXXXXX",
    contenance: "XXXXX",
    gout: "Neutre",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 8, 
    url: "XXXXXXXXXXXXXXX",
    page_position: "first",
    page_category: "XXXXXXX",
    title: "XXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XX%",
    composition: "XXXXXXXXXXXXXXXXXXXXXXXXX",
    contenance: "XXml",
    gout: "Citron Vert",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 9, 
    url: "XXXXXXXXXXXXXXXXX",
    page_category: "XXXXXX",
    title: "XXXXXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXXXXXXX",
    contenance: "Xml",
    gout: "Fraise",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 10, 
    url: "XXXXXXXXXXXXXXX",
    page_category: "XXXXXXXX",
    title: "XXXXXXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XX%",
    composition: "XXXXXXXXXXXXXXX",
    contenance: "XXml",
    gout: "Neutre",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 11, 
    url: "urlThé",
    page_position: "first",
    page_category: "XXXXXXXXXXXXXX",
    title: "XXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXXXXXXXXX",
    composition: "Neutre",
    gout: "XXXXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 12, 
    url: "urlThé",
    page_position: "first",
    page_category: "XXXXX",
    title: "XXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXXXXXXXXXXX",
    composition: "Mélisse, Verveine",
    gout: "XXXXXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 13, 
    url: "urlThé",
    page_position: "first",
    page_category: "XXXXXXXXXXXXX",
    title: "XXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "5XXXXXXXXXXXX",
    composition: "XXXXXXXXXXXXXXX",
    gout: "Menthe, Citron",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 14, 
    subPage: "XXXXXXXXX",
    page_position: "first",
    page_category: "Autre",
    title: "XXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXXXXXXXXXX",
    composition: "XXXXXXXXXXXXXXXXXX",
    contenance: "XXXXXXXXXXX",
    gout: "XXXXXXXXXXXXXXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 15, 
    page_category: "Autre",
    title: "XXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXXXXXXX",
    composition: "XXXXXXXXXXXXXXX",
    contenance: "XXXXXXXXXX",
    gout: "XXXXXXXXXXXXXXXXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 16, 
    subPage: "XXXXXXXXXXXX",
    page_position: "first",
    page_category: "Autre",
    title: "XXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXXXX%",
    composition: "XXXXXXXX",
    contenance: "XXXXXXXXXXXXXX",
    gout: "Neutre",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
    ],
    cart: [],
    isOpen: false,
    total: 0,
};



const Todos = (state = initialState, action) => {

    switch(action.type) {


        case GET_ITEMS:
             return {
                 ...state
             }

        // eslint-disable-next-line no-fallthrough
        case ADD_ITEMS:

        let check = state.cart.find(item => item._id === action.payload);

        if (!check) {
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
            })

            return {
                ...state
            }
        }


        case DELETE_ITEM:

        const filteredCart = state.cart.filter(item => item._id !== action.payload);
            return {
                ...state,
                cart:filteredCart
            }

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

        case DECREASE_ITEM:
            let decResults = state.cart.map(item => {
                if (item._id === action.payload) {
                    item = {...item, count:item.count === 1 ? item.count = 1:item.count -1}
                }
                return item
            })
            return {
                ...state,
                cart:decResults
            }

        case TOTAL_ITEMS:

        const totals = state.cart.reduce((prev, item) => {
            return prev + (item.prix * item.count)
        }, 0)
            const totalsFixed = totals.toFixed(2);
          return {
              ...state,
              total:totalsFixed
          }

        case DETAILS:
            return {
                ...state,
            }


        default:
             return state
    }


}
export default Todos;
