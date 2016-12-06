import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadRebates, loadMoreRebates } from '../actions'
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

// TODO: What is going on here? Lets show the indicator on loadMore
// then update the rebates in the dispatch function promise
const mapDispatchToProps = dispatch => ({
  hasMore: true,
  loadMore: (pageNumberToLoad) => {
    if(pageNumberToLoad < 25) {
      // TODO: Fix inifnite loop (probably in hasMore w/ isLoadingMore flag)
      // TODO: Actually load more using the page number instead of duplicating
      console.log('pageNumberToLoad = '+pageNumberToLoad)
      console.log('call dispatch(loadMoreRebates())')
      dispatch(loadMoreRebates())
    }
  }
})

RebateListPage.PropTypes = {
  rebates: PropTypes.array.isRequired
}

export default provideHooks(redial)(connect(mapStateToProps,mapDispatchToProps)(RebateListPage))
