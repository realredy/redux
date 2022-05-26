import { CalculateGame } from "../utils";

const PLEYD = "PLEYD";

let initialState = {
  counterGame: "waiting..",
};

function experimenta(param) {
  try {
    const initCalculate = new CalculateGame(param);
    const winner = initCalculate.control().length;
    return {
      type: PLEYD,
      payload: winner,
    };
  } catch (e) {
    return {
      type: PLEYD,
      payload: e,
    };
  }
}

const gamereducer = (state = initialState, action) => {
  switch (action.type) {
    case PLEYD:
      return {
        ...state,
        counterGame: action.payload,
      };

    default:
      return state;
  }
};

export { experimenta, gamereducer };
