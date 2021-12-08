import {FECH_DATA, DATA_SUCESS, DATA_FAIL} from './fechTypes'

export const fechAllData = () => {
    return {
        type: FECH_DATA
    } 
} 

export const fechDataSucess = () => {
    return {
        type: DATA_SUCESS,
        payload: allUser
    } 
} 

export const fechDataError = () => {
    return {
        type: DATA_FAIL,
        payload: dataError
    } 
} 

