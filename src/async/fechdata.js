import React, {useState} from 'react'
import * as action from './asyncResources/fechactions'
import { useSelector, useDispatch } from 'react-redux'


function Fechdata() {
    const dispach = useDispatch() 
    const datafech = useSelector(state => {

        const selectorResult =  state.async.allUser.length > 0  ? state.async.allUser : state.async.error.toString()
        return selectorResult
    }) 

    if(typeof datafech != 'string'){
        return (
            <div>
           
            <h3>
                Hola mundo...
            </h3>
            <ul>
                {datafech.map((data, key)=>{
                    return(
                        <li key={key}>
                            {data.title}
                            </li>
                    )
                })}
            </ul>
    
            <button onClick={ () => dispach( action.datafech() ) }>fech data</button>
          
        </div>
        )
    } else {
        return (
            <div>
           
            <h3>
            { datafech }
            </h3>
            
    
            <button onClick={ () => dispach( action.datafech() ) }>fech data</button>
          
        </div>
        )
    }
    
}

export default Fechdata
