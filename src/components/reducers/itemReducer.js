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
    DETAILS
} from '../actions/types';


const initialState = {
    items:[
        {
            _id: 1,
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            title: "Weed Seed 1",
            price: "100",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
            count: 1,
            isInCart: false
        },
        {
            _id: 2,
            img: "https://ct112013.files.wordpress.com/2013/07/pasteeel.jpg",
            title: "Weed Seed 2",
            price: "40",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
            count: 1,
            isInCart: false
        },
        {
            _id: 3,
            img: "https://i.pinimg.com/736x/1a/e9/ff/1ae9ff68eddb75113cc797f1324515b9--color-coordination-reiss.jpg",
            title: "Weed Seed 3",
            price: "47",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
            count: 1,
            isInCart: false
        },
        {
            _id: 4,
            img: "http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg",
            title: "Weed Seed 4",
            price: "98",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
            count: 1,
            isInCart: false
        },
        {
            _id: 5,
            img: "https://i.pinimg.com/originals/de/3a/64/de3a6465fd0b23253218d265b01da16e.jpg",
            title: "Weed Seed 5",
            price: "14",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
            count: 1,
            isInCart: false
        },
        {
            _id: 6,
            img: "https://www.clashmusic.com/sites/default/files/field/image/CLASH104_%20InternalImage62.jpg",
            title: "Weed Seed 6",
            price: "438",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
            count: 1,
            isInCart: false
        },
        {
            _id: 7,
            img: "http://www.umusic.ca/wp-content/uploads/2017/07/Kendrick-Lamar-Interview-Magazine-Photo-7.jpg",
            title: "Weed Seed 7",
            price: "865",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
            count: 1,
            isInCart: false
        },
        {
            _id: 8,
            img: "http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/g/gca1qade12xtvxq.jpg",
            title: "Weed Seed 8",
            price: "865",
            details: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les",
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
            return prev + (item.price * item.count)
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