import { ADD_TO_CART, REMOVE_TO_CART } from "../constaint"
const initialState = {
    cardData: []
}
export default function cardItem(state=[], action) {
    switch(action.type) {
        case ADD_TO_CART:
            console.log("reducer", action)
            return [
                ...state,
                {cardData: action.data}
            ]
            break;
        case REMOVE_TO_CART:
            state.pop();
            return [
               ...state
            ]
        default:
            return state
    }
} 