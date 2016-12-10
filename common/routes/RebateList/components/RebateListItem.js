import React from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { StyleSheet, css } from 'aphrodite'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import AnimateFadeIn from '../../../components/AnimateFadeIn'
import AnimateFadeUp from '../../../components/AnimateFadeUp'

const RebateListItem = ({ rebate }) => (
  <div className={css(styles.listItem)}>
    <AnimateFadeUp key={rebate.uuid}>
      <Card>
        <CardHeader
          title={rebate.title}
          avatar={rebate.brand.logo}
          />
        <CardMedia>
          <img src={rebate.image} className={css(styles.image)} />
        </CardMedia>
        <CardTitle subtitle={`\$${rebate.amount} rebate`} />
        <CardActions>
          <FlatButton label='claim' containerElement={<Link to={`/rebate/${rebate.slug}`} />} primary />
          <FlatButton label='shop' containerElement={<Link to={rebate.amazon} />} target='_blank' />
        </CardActions>
      </Card>
    </AnimateFadeUp>
  </div>
)

const styles = StyleSheet.create({
  listItem: {
    // margin: '0 auto 1.5rem'
    // width: '100%',
    width: 300,
    maxWidth: 300
  },
  title: {
    fontSize: 28,
    textDecoration: 'none',
    lineHeight: '1.2',
    margin: '0 0 1.5rem',
    color: '#000',
    transition: '.3s opacity ease',
    ':hover': {
      opacity: 0.5
    }
  },
  image: {
    maxWidth: '100%'
  }
})

export default RebateListItem
