import {BUY_CAKE} from './cakesTypes'

const initialState = {
    numOfCakes: 15
}

function cakesReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            
   
        default:
            return state
    }
    
}

export default cakesReducer;