import { ADD_TO_CART, REMOVE_TO_CART } from "../constants"
/* const initialState = {
    cardData: []
} */

export const cartItem = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            
            return [
                ...state,
                { data: action.data }
            ];
            break;

        case REMOVE_TO_CART:
            console.log("reducer", action);
            state.pop();
            return [
                ...state
            ]
            break;

        default:
            return state;
    }
}