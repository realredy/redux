import COUNT_INCREMENT from './countType'
//? asignamos 1 en caso de no tener asignado nada en paramentros
const increment = (numero = 1)=>{
       return {
          type: COUNT_INCREMENT,
          payload: numero
       }
}
 export default increment
 /**
  * Al definir esta function que solo retorna un objeto con la propiedad 
  * type, es en si la definicion de una accion la cual retorna la constante 
  * llamada count increment y esto nos sirve para enviar un mensaje al usar 
  * un depurador que esta accion esta en este caso incrementando o desincrementando 
  * un nunmenro lo cual tambien puede ser el hecho de definir ej: LANGUAJE_CHANGE, 
  * O CLOSE_SECTION, FECH_DATA
 */