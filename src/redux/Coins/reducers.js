export const GET_COINS_PENDING = "GET_COINS_PENDING";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_ERROR = "GET_COINS_ERROR";


const initialState = {
    data: localStorage.getItem('coins') ? localStorage.getItem('coins') : [],
    isLoading: false,
    error: null,
    hasError: false,
}

function coinsReducer(state = initialState, action, getState) {
  switch (action.type) {
    case GET_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_COINS_PENDING:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: true,
      };
      default: return state

    }
}

export default coinsReducer;