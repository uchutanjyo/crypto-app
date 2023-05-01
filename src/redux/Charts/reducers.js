export const GET_CHARTSDATA_PENDING = "GET_CHARTSDATA_PENDING";
export const GET_CHARTSDATA_SUCCESS = "GET_CHARTSDATA_SUCCESS";
export const GET_CHARTSDATA_ERROR = "GET_CHARTSDATA_ERROR";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
    hasError: false,
}

function chartsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARTSDATA_ERROR:
      return {
        state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_CHARTSDATA_PENDING:
      return {
        state,
        data: action.payload,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case GET_CHARTSDATA_SUCCESS:
      return {
        state,
        data: action.payload,
        isLoading: false,
        hasError: true,
      };
      default: return state

    }
}

export default chartsReducer;