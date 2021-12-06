import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
/**
 * Con el uso de estos hooks ya no es necesario usar el connect
 * ya que el codigo se hace mas legible
*/
import increment from '../redux/counter/countAction'

function Payload() {
 const dispach = useDispatch() // ? asignamos la constante a la funcion dispach
 const actualCount = useSelector(state => state.counter.actualCount) // * asignamos la constante al valor del stado
 const [number, setNumber] = useState(1)
 /**
  * ! href="#" onClick={ ()=> dispach( increment() ) }
  * ! el evento de click crea una funcion que retorna un dispach que recibe como parametro la accion
 */
    return (
        <div>
            <hr />
            <pre>Implementacion del payload</pre>
            <input type="number" value={number} onChange={e => setNumber(e.target.value) } />
            <h2>El numero a discontar es:{number} y el resultado es: {actualCount}  </h2>  
                <a href="#" onClick={ ()=> dispach( increment(number) ) }>click me to dispach payload</a>

        </div>

       
    )
}
export default Payload 