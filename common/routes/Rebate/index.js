if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { reducer as formReducer } from 'redux-form'
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'rebate/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/RebatePage',
        './reducer'
      ], (require) => {
        let RebatePage = require('./containers/RebatePage').default
        let rebateReducer = require('./reducer').default
        injectAsyncReducer(store, 'currentRebate', rebateReducer)
        injectAsyncReducer(store, 'form', formReducer) // redux-form
        cb(null, RebatePage)
      })
    }
  }
}
