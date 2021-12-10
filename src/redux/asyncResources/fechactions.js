import {FECH_DATA, DATA_SUCESS, DATA_FAIL} from './fechTypes'

export const fechAllData = () => {
    return {
        type: FECH_DATA
    } 
} 

export const fechDataSucess = (allUser) => {
    return {
        type: DATA_SUCESS,
        payload: allUser
    } 
} 

export const fechDataError = (error) => {
    return {
        type: DATA_FAIL,
        payload: error
    } 
} 

export const datafech = (text) => {
    return (dispatch) =>{
        dispatch(fechAllData())
        // try {
            fetch(text) // 'https://jsonplaceholder.typicode.com/users/1/posts' // https://tinyfac.es/api/data?limit=50&quality=10
            .then(data => data.json()).then( data => {
                dispatch(fechDataSucess(data))
            }).catch(error => dispatch(fechDataError(error)))
        // } catch (error) {
         //   dispatch(fechDataError(error))
         //   console.log('fechacion::: fromAction::',error)
        // }
        
    }
}