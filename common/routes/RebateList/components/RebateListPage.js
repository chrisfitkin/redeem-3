import React from 'react'
import MasonryInfiniteScroller from 'react-masonry-infinite'
import RebateListItem from '../components/RebateListItem'
import Helmet from 'react-helmet'
import { StyleSheet, css } from 'aphrodite'

export class RebateListPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    let {rebates, hasMore, loadMore } = this.props;

    return (
      <div className={css(styles.root)}>
        <Helmet title='Rebates' />
        {rebates.isLoading &&
          <div>
            <h2 className={css(styles.title)}>Loading....</h2>
          </div>}
        {!rebates.isLoading &&
          <MasonryInfiniteScroller
            sizes={sizes}
            loader={null}
            style={styles.masonryInfiniteScroller}
            className={css(styles.masonryInfiniteScroller)}
            hasMore={hasMore}
            loadMore={loadMore}
            >
            {
              rebates.data.map((rebate, i) => <RebateListItem key={rebate.uuid} rebate={rebate} />)
            }
          </MasonryInfiniteScroller>}
        {rebates.isLoadingMore &&
          <div>
            <h2 className={css(styles.title)}>Loading More...</h2>
          </div>}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: 'auto',
    maxWidth: '100%'
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  },
  masonryContainer: {
    maxWidth: '100%',
  },
  masonryInfiniteScroller: {
    margin: '0 auto 1.5rem'
  }
})

const sizes = [
  { columns: 1, gutter: 20 },
  { mq: '768px', columns: 2, gutter: 20 },
  { mq: '1024px', columns: 3, gutter: 20 }
]

export default RebateListPage
