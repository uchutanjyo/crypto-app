export const FETCH_COIN_PENDING = "FETCH_COIN_PENDING";
export const FETCH_COIN_SUCCESS = "FETCH_COIN_SUCCESS";
export const FETCH_COIN_ERROR = "FETCH_COIN_ERROR";
export const SET_COIN_ID = "SET_COIN_ID"

const initialState = {
    data: [],
    coinId: '',
    isLoading: false,
    error: null,
    hasError: false,
}

function coinReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN_PENDING:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case FETCH_COIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: true,
      };
      case FETCH_COIN_ERROR:
        return {
          ...state,
          isLoading: false,
          hasError: true,
          error: action.payload,
        };
      case SET_COIN_ID:
        return {
          ...state,
          coinId: action.payload,
        };
      default: return state

    }
}

export default coinReducer;