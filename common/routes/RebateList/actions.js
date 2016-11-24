import { LOAD_REBATES_REQUEST, LOAD_REBATES_SUCCESS, LOAD_REBATES_FAILURE } from '../../constants'

export function loadRebates () {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_REBATES_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/rebates`)
      .then(res => {
        console.log(res)
        dispatch({
          type: LOAD_REBATES_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_REBATES_SUCCESS}: `, error)
        dispatch({
          type: LOAD_REBATES_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}
