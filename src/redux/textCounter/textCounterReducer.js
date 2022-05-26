import { TEXT_COUNTER, PARAGRHAP, txt } from "./textCounterType.js";

const initialState = {
  textActualStatus: "!Hola Mundo...",
};

const textModify = (text) => {
  text.textActualStatus = "";
  return text.textActualStatus + "new text added";
};

const createAparahrap = (text) => {
  return (text.textActualStatus = txt);
};

const TextCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_COUNTER:
      return {
        ...state,
        textActualStatus: textModify(state),
      };
    case PARAGRHAP: {
      return {
        ...state,
        textActualStatus: createAparahrap(state),
      };
    }

    default:
      return state;
  }
};
export default TextCountReducer;
