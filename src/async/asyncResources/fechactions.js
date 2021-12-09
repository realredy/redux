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

export const fechDataError = (dataError) => {
    return {
        type: DATA_FAIL,
        payload: dataError
    } 
} 

export const datafech = () => {
    return (dispatch) =>{
        dispatch(fechAllData())
        try {
            fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(data => data.json()).then( data => {
                dispatch(fechDataSucess(data))
            })
        } catch (error) {
            dispatch(fechDataError(error))
            console.log(error)
        }
        
    }
}