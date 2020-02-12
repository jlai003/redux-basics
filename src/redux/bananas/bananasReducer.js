import {BUY_BANANA} from './bananasTypes'

const initialState = {
    numOfBananas: 10
}
function bananasReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_BANANA: {     
            return {
            ...state, 
            numOfBananas: state.numOfBananas - 1
        }     }           
        default:
           return state;
        
           
    }
}
export default bananasReducer;