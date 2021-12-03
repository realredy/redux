import React from 'react' 
import { connect } from 'react-redux'
import increment from '../redux/counter/countAction'
/**
 * !@concat
 * enlaza estas dos funciones para poder enviarle informacion 
 * sobre cuando lanza la accion en este daso de desincrementar 
 * el valor al hacer click
*/
 function Button(props) { 
    return (
        <div>
             <span>implementation count: {props.actualCount}</span>
            <button onClick={props.increment}>click to increment
            </button>
        </div>
    )
}

const mapStoreProps = state =>{
    return {
        actualCount: state.actualCount
    }
}
const mapDispachProps = dispach => {
    return {
        increment: ()=>{ dispach(increment())}
    }
}
export default connect(mapStoreProps, mapDispachProps)(Button) 
/**
 * ?Podemos user HOOKS en vez de usar Connect para realizar esta 
 * ?operacion, los mismos han sido anadidos en la version 7.1
 *  */
