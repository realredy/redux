import COUNT_INCREMENT from './countType'
// ! investigar porque action toma este constante como un action
const initialState = {
    actualCount : 100
}
/**
 * Una funciuon reducer acepta state y action y retona un nuevo 
 * estado que este caso en estado es el actualcount, este reducer
* es el encargado de realizar la operacion matematica o la llamada 
* api rest o infinidad de funciones
*/
const countReducer = (state = initialState, action) => {
    switch(action.type){
        case COUNT_INCREMENT :
        return {
            // tal vez el inicial state object puede obtener multimples valores dentro 
            // por esta razon usamos en spreat operator [...] para realizar una copia del
            // total el objeto y luego entonces pasar a transformar el valor del parametro 
            // que deseamos cambiar
            ...state,
            actualCount: state.actualCount - 1
        }
        // * por defecto devolvemos todo el objeto
       default : 
         return state; 
    }
}

export default countReducer