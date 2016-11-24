if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'post/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/RebatePage',
        './reducer'
      ], (require) => {
        let RebatePage = require('./containers/RebatePage').default
        let rebateReducer = require('./reducer').default
        injectAsyncReducer(store, 'currentRebates', rebateReducer)
        cb(null, PostPage)
      })
    }
  }
}
