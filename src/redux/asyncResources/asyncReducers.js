import { FECH_DATA, DATA_SUCESS, DATA_FAIL } from "./fechTypes";

const initialState = {
  loadingData: true,
  allUser: [],
  error: "",
};
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECH_DATA:
      return {
        ...state,
        loadingData: true,
      };
    case DATA_SUCESS:
      return {
        loadingData: false,
        allUser: action.payload,
        error: "",
      };
    case DATA_FAIL:
      return {
        loadingData: false,
        allUser: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default asyncReducer;
