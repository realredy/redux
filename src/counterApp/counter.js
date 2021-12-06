import React from 'react'
import Button from './button'
import { Provider } from 'react-redux'
import  WhitHookRedux  from './whitHookRedux.js'
import Boot_reducers from './bootreducers'
import Payload from './payload'
/**
 * * Provider 
 * Este es el encargadode encapsular el valor que sera compartido dentro de todos
 * los modulos que este envuelva y como props envia la informacion de l estado que 
 * actualmente es 100 , la acccion, y el reducer que el encargado de transformar el dato
*/
 import store from '../redux/store' // ! esto para usarlo solo con un store //--- <Provider store={store} >

   
 const Counter = () => {
    return (
        <div>
            <Provider store={ store } >
                <Button />
                <WhitHookRedux />  
                <Boot_reducers />
                <Payload />
            </Provider>
             
        </div>
    )
}

export default Counter
