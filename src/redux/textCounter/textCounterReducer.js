 import TEXT_COUNTER from './textCounterType.js'

 const initialState = {
     textActualStatus: '!Hola Mundo...'
 }

 const textModify = (text) => { 
     console.log(text.textActualStatus )
     text.textActualStatus = ''
    return text.textActualStatus + 'new text added'
 }

 const TextCountReducer = (state = initialState, action) => {
     switch (action.type) {
         case TEXT_COUNTER:
               return {
                   ...state,
                   textActualStatus: textModify(state) 
               }
             break;
     
         default: return state
             break;
     }
 
 } 
 export default TextCountReducer