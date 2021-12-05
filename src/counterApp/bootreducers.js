import React from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import TextCounterAction from '../redux/textCounter/textCounterAction'

 
 

function Boot_reducers() {
    const dispach = useDispatch() // ? asignamos la constante a la funcion dispach
    const textStatus = useSelector(state => state.text.textActualStatus) // * asignamos la constante al valor del stado
 

    return (
        <div>
            <p>Text status: {textStatus}</p>
            <button onClick={ ()=> dispach( TextCounterAction() )}> clickme to transform the text</button>
        </div>
    )
}
export default Boot_reducers