import React, {useState} from 'react'
import * as action from '../redux/asyncResources/fechactions'
import { useSelector, useDispatch } from 'react-redux'


function Fechdata() {
   const [text, setText] = useState()
    const dispatch = useDispatch()
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
            <pre>https://tinyfac.es/api/data?limit=50&quality=10</pre>
            <ul>
                {datafech.map((data, key)=>{
                    // console.log(data)
                    return(
                        <li key={key}>
                           <img src={data.url} height='50' width={'50'} />
                            </li>
                    )
                })}
            </ul>
    
            <button onClick={ () => dispatch( action.datafech() ) }>fech data</button>
          
        </div>
        )
    } else {
        return (
            <div>
           
            <h3>
            { datafech }
            </h3>
            <pre>https://tinyfac.es/api/data?limit=50&quality=10</pre>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
    
            <button onClick={ () => dispatch( action.datafech(text) ) }>fech data</button>
          
        </div>
        )
    }
    
}

export default Fechdata
