import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadRebates } from '../actions'
import { selectRebates } from '../reducer'
import RebateListPage from '../components/RebateListPage'

// TODO: create hasMore and loadMore function, pass to props through dispatch 
// https://github.com/skoob13/react-masonry-infinite

const redial = {
  fetch: ({ dispatch }) => dispatch(loadRebates())
}

const mapStateToProps = state => ({
  rebates: selectRebates(state)
})

RebateListPage.PropTypes = {
  rebates: PropTypes.array.isRequired
}

export default provideHooks(redial)(connect(mapStateToProps)(RebateListPage))
