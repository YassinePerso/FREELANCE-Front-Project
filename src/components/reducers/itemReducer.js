import {
    // ADD_TO_LOCALSTORAGE,
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEM,
    TOGGLE_NAV,
    CLOSE_NAVBAR,
    BANNER_CLOSE,
    INCREASE_ITEM,
    DECREASE_ITEM,
    TOTAL_ITEMS,
    DETAILS
} from '../actions/types';


const initialState = {
    items:[
        {
            _id: 1,
            page_category: "Huile",
            title: "Huile Calmante",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Base MCT et CBD seul",
            contenance_number: "only",
            contenance: "15ml",
            choice: "multiple",
            taux: ["5%", "10%", "15%"],
            prix: [38.90, 59.90, 89.90],
            gout: "neutre",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 2,
            page_category: "Huile",
            title: "Huile Relaxante",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Base MCT et CBD + CBG",
            contenance_number: "only",
            contenance: "10ml",
            choice: "multiple",
            taux: ["5%", "10%", "15%"],
            prix: [39.90, 49.90, 69.90],
            gout: "neutre",
            Provenance: "Europe",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 3,
            page_category: "Huile",
            title: "Huile Anti-Stress",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Base MCT et CBD seul",
            contenance_number: "only",
            contenance: "10ml",
            choice: "only",
            taux: "10%",
            prix: 49.90,
            gout: "neutre",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 4,
            page_category: "Huile",
            title: "Huile Anti-douleur",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Base MCT et CBD + CBG",
            contenance_number: "multiple",
            contenance: ["10ml", "20ml"],
            choice: "multiple",
            taux: ["10%", "10%", "10%"],
            prix: [59.90, 59.90, 59.90],
            gout: ["Citron vert", "Fraise", "Neutre"],
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 5,
            page_category: "Thé",
            title: "Infusion CBD Vitalité",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Neutre",
            choice: "only",
            taux: "10% de fleurs",
            prix: 14.90,
            gout: "Neutre",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 6,
            page_category: "Thé",
            title: "Infusion CBD Digestion",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Mélisse, Verveine",
            taux: "10% de fleurs",
            prix: 14.90,
            gout: "Mélisse, Verveine",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 7,
            page_category: "Thé",
            title: "Thé Anti-Stress",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Thé vert, Menthe, Citron",
            taux: "5% de fleurs",
            prix: 13.90,
            gout: "Menthe, Citron",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 8,
            page_category: "Autre",
            title: "Gummies CBD",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Vegan, Mixed fruits",
            contenance: "60 Gummies",
            choice: "only",
            taux: "<2%",
            prix: 34.90,
            gout: "Mixed fruits",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 9,
            page_category: "Autre",
            title: "Gummies CBD",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Vegan, Strawberry",
            contenance: "60 Gummies",
            choice: "only",
            taux: "<2%",
            prix: 34.90,
            gout: "Strawberry",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        },
        {
            _id: 10,
            page_category: "Autre",
            title: "Gummies CBD",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            description: "loreum loreum loreum loreum loreum",
            composition: "Vegan",
            contenance: "60 Gummies",
            choice: "only",
            taux: "2.50%",
            prix: 29.90,
            gout: "Neutre",
            Provenance: "France",
            utilisation: "loreum loreum loreum loreum loreum",
            count: 1,
            isInCart: false
        }
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
        case TOGGLE_NAV:
             return {
                 ...state,
                 isOpen:!state.isOpen
             }
             //close navbar
        case CLOSE_NAVBAR:
            if (state.isOpen === true) {
                return {
                    ...state,
                    isOpen:false
                }
            }
            //Add To Cart functionnality
        // eslint-disable-next-line no-fallthrough
        case ADD_ITEMS:

        if (localStorage.getItem("cart")) {
          initialState.cart = JSON.parse(localStorage.getItem("cart"));
        } else {
          initialState.cart = [];
        }
            
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
        case BANNER_CLOSE:
            state.items.forEach(item => {
                item.isInCart = false
            })

            return {
                ...state
            }

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

            return {
                ...state,
                cart:decResults
            }

        // Total du panier
        case TOTAL_ITEMS:

        const totals = state.cart.reduce((prev, item) => {
            return prev + (item.prix * item.count)
        }, 0)
            
          return {
              ...state,
              total:totals
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