import { combineReducers } from 'redux'
/**
 * ! combinereducers para combinar varios reducers en un objeto ilimitado
*/
import TextCountReducer from './textCounter/textCounterReducer'
import countReducer from './counter/countReducer'

const bootStore = combineReducers({
    counter: countReducer,
    text: TextCountReducer
})

export default bootStore
 