export const GET_PRICES_PENDING = "GET_PRICES_PENDING";
export const GET_PRICES_SUCCESS = "GET_PRICES_SUCCESS";
export const GET_PRICES_ERROR = "GET_PRICES_ERROR";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
    hasError: false,
}

function chartsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRICES_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_PRICES_PENDING:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case GET_PRICES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: true,
      };
      default: return state

    }
}

export default chartsReducer;