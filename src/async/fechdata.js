import React, {useState} from 'react'
import * as action from './asyncResources/fechactions'
import { useSelector, useDispatch } from 'react-redux'


function Fechdata() {
    const dispach = useDispatch() 
    const datafech = useSelector(state => state.async.allUser) 
    console.log('midata:::',datafech)
    return (
        <div>
       
        <h3>
            Hola mundo...
        </h3>
        <ul>
            {datafech.map(data=>{
                console.log(data.title)
                return(
                    <li>
                        {data.title}
                        </li>
                )
            })}
        </ul>

        <button onClick={ () => dispach( action.datafech() ) }>fech data</button>
      
    </div>
    )
}

export default Fechdata
