import {BUY_DONUT} from './donutsTypes'

const initialState = {
    numOfDonuts: 20
}

function donutsReducer(state = initialState, action) {
    switch (action.type) {
        case (BUY_DONUT):
            return {
                ...state, 
                numOfDonuts: state.numOfDonuts - 1
            }                
        default:
            {
                console.log(state.numOfDonuts)
            return state;
            }
    }
    
}

export default donutsReducer;