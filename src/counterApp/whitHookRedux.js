import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
/**
 * Con el uso de estos hooks ya no es necesario usar el connect
 * ya que el codigo se hace mas legible
*/
import increment from '../redux/counter/countAction'

function WhitHookRedux() {
 const dispach = useDispatch() // ? asignamos la constante a la funcion dispach
 const actualCount = useSelector(state => state.counter.actualCount) // * asignamos la constante al valor del stado
 /**
  * ! href="#" onClick={ ()=> dispach( increment() ) }
  * ! el evento de click crea una funcion que retorna un dispach que recibe como parametro la accion
 */
    return (
        <div>
            <hr />
            <pre>Este es un uso del hook que representa tambien</pre>
            <h2>El numero:   {actualCount}  </h2>
                <pre>Que contiene redux</pre> 

                <h3>Ahora desde el uso del hoo podemos hacer dispacho</h3>
                <a href="#" onClick={ ()=> dispach( increment() ) }>click me to dispach too</a>

        </div>

       
    )
}
export default WhitHookRedux 