import {FECH_DATA, DATA_SUCESS, DATA_FAIL} from './fechTypes'

const initialState = {
    loadingData: true,
    allUser: [],
    error: ''
} 
const asyncReducer = (state = initialState, action) => {
        switch (action.type) {
            case FECH_DATA:
                return{
                    ...state,
                    loadingData: true
                }
                break;
               case DATA_SUCESS:
                   return{ 
                        loadingData: false,
                        allUser: action.payload,
                        error: ''
                           }
               break;
               case DATA_FAIL:
                   return{ 
                        loadingData: false,
                        allUser: [],
                        error: action.payload
                           }
               break;
            default:
              return  state
                break;
        }
} 

export default asyncReducer