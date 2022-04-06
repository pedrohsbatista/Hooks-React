import { reducer } from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0,
    numberToAdd: 0, 
}

export {
    reducer,
    initialState    
}