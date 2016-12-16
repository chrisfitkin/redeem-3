import React from 'react'
import MasonryInfiniteScroller from 'react-masonry-infinite'
import RebateListItem from '../components/RebateListItem'
import Helmet from 'react-helmet'
import { StyleSheet, css } from 'aphrodite'

import { CSSGrid, SpringGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';


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

const CustomGrid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

const Grid = measureItems(SpringGrid);


const RebateListPage = ({ rebates, hasMore, loadMore }) => (
  <div className={css(styles.root)}>
    <Helmet title='Rebates' />
    {rebates.isLoading &&
      <div>
        <h2 className={css(styles.title)}>Loading....</h2>
      </div>}
    {!rebates.isLoading &&
      <Grid
          component="div"
          columns={3}
          columnWidth={300}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={800}
          easing="ease-out"
        >
        {
          rebates.data.map((rebate, i) => 
            <RebateListItem key={rebate.uuid} rebate={rebate} />
          )
        }
      </Grid>}
    {rebates.isLoadingMore &&
      <div>
        <h2 className={css(styles.title)}>Loading More...</h2>
      </div>}
  </div>
)

export default RebateListPage
