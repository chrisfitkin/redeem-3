import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadRebate } from '../actions'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import NotFound from '../../../components/NotFound'
import AnimateFadeIn from '../../../components/AnimateFadeIn'
import { selectCurrentRebate } from '../reducer'
import ClaimFormContainer from './ClaimFormContainer'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadRebate(slug))
}

const mapStateToProps = state => selectCurrentRebate(state)

const RebatePage = ({ title, image, amount, amazon, brand, isLoading, error }) => {
  if (!error) {
    return (
      <div>
        <Helmet title={title} />
        {isLoading &&
          <div>
            <h2 className={css(styles.loading)}>Loading....</h2>
          </div>}
        {!isLoading &&
          <div>
            <AnimateFadeIn>
              <div className={css(styles.card)}>
                {/*
                <h3>{brand.title}</h3>
                <h2 className={css(styles.title)}>{title}</h2>
                */}
                <p className={css(styles.content)}><img className={css(styles.image)} src={image} /></p>
                {/* <p className={css(styles.content)}>shop: <a href={amazon}>{amazon}</a></p>--> */}
              </div>
            </AnimateFadeIn>
            <AnimateFadeIn>
              <Card className={css(styles.card)}>
                <CardHeader
                  className={css(styles.cardHeader)}
                  avatar={brand.logo}
                  title={title}
                  subtitle={brand.title}
                />
                <CardTitle
                  title={'Claim $' + amount + ' rebate'}
                  />
                <CardText>
                  <ClaimFormContainer />
                </CardText>
              </Card>
            </AnimateFadeIn>
          </div>}
      </div>
    )
  } else {
    // maybe check for different types of errors and display appropriately
    return <NotFound />
  }
}

RebatePage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  amazon: PropTypes.string,
  amount: PropTypes.number,
  brand: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.object
}

const styles = StyleSheet.create({
  content: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '1rem 0',
    color: '#555'
  },
  card: {
    margin: '0 auto 10px auto',
    padding: 10,
    maxWidth: 450
  },
  cardHeader: {
    textAlign: 'left'
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#000'
  },
  image: {
    maxHeight: 100
  },
  loading: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(RebatePage))
