import { LOAD_REBATE_REQUEST, LOAD_REBATE_SUCCESS, LOAD_REBATE_FAILURE } from '../../constants'

export function loadRebate (slug) {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_REBATE_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/rebates/${slug}`)
      .then(res => {
        dispatch({
          type: LOAD_REBATE_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_REBATE_SUCCESS}: `, error)
        dispatch({
          type: LOAD_REBATE_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}
