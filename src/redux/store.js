import { createStore } from 'redux'
/*
 *  hace la primera aparicion redux con el metodo reateStore el cual guarda
 * el resultado que guarda el reducer 
*/
import countReducer from './counter/countReducer'
// * este metodo recibe como parametro el reducer importado anteriomente

// ? @multipleReducers para crear multiple reducer introducimos este codigo 
import bootStore from '.././redux/multipleReducer' 
const store = createStore(bootStore) 
//  const store = createStore(countReducer) 

export default store

//! El store es unico no importa que uses uno o multiple reducers