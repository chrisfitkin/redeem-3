import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadRebates } from '../actions'
import { connect } from 'react-redux'
import RebateListItem from '../components/RebateListItem'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import { selectRebates } from '../reducer'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadRebates())
}

const mapStateToProps = state => ({
  rebates: selectRebates(state)
})

const RebateListPage = ({ rebates }) => (
  <div className={css(styles.root)}>
    <Helmet title='Rebates' />
    {rebates.isLoading &&
      <div>
        <h2 className={css(styles.title)}>Loading....</h2>
      </div>}
    {!rebates.isLoading &&
      rebates.data.map((rebate, i) => <RebateListItem key={rebate.id} rebate={rebate} />)}
  </div>
)

RebateListPage.PropTypes = {
  rebates: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 500
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(RebateListPage))
