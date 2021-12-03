import { createStore } from 'redux'
/*
 *  hace la primera aparicion redux con el metodo reateStore el cual guarda
 * el resultado que guarda el reducer 
*/
import countReducer from './counter/countReducer'
// * este metodo recibe como parametro el reducer importado anteriomente
 const store = createStore(countReducer) 

export default store
