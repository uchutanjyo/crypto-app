export const SET_CURRENCY = "SET_CURRENCY"

const initialState = {
    currency: 'USD',
}

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        state,
        currency: action.payload,
      };
      default: return state

    }
}

export default currencyReducer;