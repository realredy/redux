import React, {useState} from 'react'
import * as action from './asyncResources/fechactions'
import { useSelector, useDispatch } from 'react-redux'

function Displaydata() {

 const dispach = useDispatch() 
 const datafech = useSelector(state => state.async.allUser) 
 const [midata, setMidata] = useState(datafech)
console.log('midata: ', midata)
    return (
        <div>
       
            <h3>
                Hola mundo...
            </h3>
            <button onClick={ () => dispach( action.datafech() ) }>fech data</button>
          
        </div>
    )
}

export default Displaydata