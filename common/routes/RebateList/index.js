if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'rebates',
    getComponents (location, cb) {
      require.ensure([
        './containers/RebateList',
        './reducer'
      ], (require) => {
        let RebatePage = require('./containers/RebateList').default
        let rebateReducer = require('./reducer').default
        injectAsyncReducer(store, 'rebates', rebateReducer)
        cb(null, RebatePage)
      })
    }
  }
}
