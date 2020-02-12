import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers} from 'redux'
import logger from 'redux-logger'
import bananasReducer from './bananas/bananasReducer'
import donutsReducer from './donuts/donutsReducer'
import cakesReducer from './cakes/cakesReducer'
import orangesReducer from './oranges/orangesReducer'

const rootsReducer = combineReducers({
    bananas: bananasReducer,
    donuts: donutsReducer,
    oranges: orangesReducer,
    cakes: cakesReducer
})

const store = createStore(rootsReducer, composeWithDevTools(
    applyMiddleware(logger)))

export default store