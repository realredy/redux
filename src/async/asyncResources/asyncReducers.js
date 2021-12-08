import {FECH_DATA, DATA_SUCESS, DATA_FAIL} from './fechTypes'

const initialState = {
    loadingData: true,
    allUser: [],
    dataError: ''
} 
const asyncReducer = (state = initialState, action) => {
        switch (action.type) {
            case FECH_DATA:
                return{
                    ...state,
                    loadingData: action.payload
                }
                break;
               case DATA_SUCESS:
                   return{ 
                        loadingData: false,
                        allUser: action.payload,
                        dataError: ''
                           }
               break;
               case DATA_FAIL:
                   return{ 
                        loadingData: false,
                        allUser: [],
                        dataError: action.payload
                           }
               break;
            default:
              return  state
                break;
        }
} 

export default asyncReducer