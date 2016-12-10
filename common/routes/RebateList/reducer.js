import * as types from '../../constants'

const initialState = {
  data: [],
  lastFetched: null,
  isLoading: false,
  isLoadingMore: false,
  error: null
}

export default function rebates (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_REBATES_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.LOAD_REBATES_SUCCESS:
      return { ...state,
        data: action.payload,
        lastFetched: action.meta.lastFetched,
        isLoading: false}
    case types.LOAD_REBATES_FAILURE:
      return { ...state,
        error: action.payload}
    case types.LOAD_MORE_REBATES_REQUEST:
      return { ...state,
        isLoadingMore: true,
        error: null}
    case types.LOAD_MORE_REBATES_SUCCESS:
      return { ...state,
        data: state.data.concat(action.payload),
        lastFetched: action.meta.lastFetched,
        isLoadingMore: false}
    case types.LOAD_MORE_REBATES_FAILURE:
      return { ...state,
        error: action.payload}
    default:
      return state
  }
}

// Example of a co-located selector
export const selectRebates = (state) => state.rebates
