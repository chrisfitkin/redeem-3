import { LOAD_REBATES_REQUEST, LOAD_REBATES_SUCCESS, LOAD_REBATES_FAILURE,
    LOAD_MORE_REBATES_REQUEST, LOAD_MORE_REBATES_SUCCESS, LOAD_MORE_REBATES_FAILURE } from '../../constants'

export function loadRebates () {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_REBATES_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/rebates`)
      .then(res => {
        // console.log(res)
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

export function loadMoreRebates () {
  // console.log('running loadMoreRebates()');
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    const { isLoading, isLoadingMore } = getState().rebates

    if (isLoadingMore) {
      return new Promise(function (resolve, reject) {
        resolve(true)
      })
    }

    dispatch({ type: LOAD_MORE_REBATES_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/rebates`)
      .then(res => {
        // TODO: remove this step when pulling unique records
        const uuidV4 = require('uuid/v4')
        res.data = res.data.map(function (obj) {
          return {
            ...obj,
            uuid: uuidV4({msecs: Date.now()})
          }
        })
        return res
      })
      .then(res => {
        // console.log(res)
        dispatch({
          type: LOAD_MORE_REBATES_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_MORE_REBATES_SUCCESS}: `, error)
        dispatch({
          type: LOAD_MORE_REBATES_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}
