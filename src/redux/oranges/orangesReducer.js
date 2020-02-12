import {BUY_ORANGES} from './orangesTypes'

const initialState = {
    numOfOranges: 15
}
function orangeReducer(state=initialState, action) {

    switch (action.type) {
        case BUY_ORANGES:
            return {
                ...state,
                numOfOranges: state.numOfOranges - 1
            }
      
        default:
            return state
    }
}
export default orangeReducer;