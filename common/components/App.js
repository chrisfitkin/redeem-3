import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IndexLink from 'react-router/lib/IndexLink'
import { StyleSheet, css } from 'aphrodite'


let Logo = "/images/logo.png";

const App = ({ children, location }) => {
  // console.log('location: ', location)
  return (
    <MuiThemeProvider>
      <div className={css(styles.root)}>
        <Helmet title='Redeem' titleTemplate='%s - Redeem' />
        <IndexLink to='/'>
          <h1 className={css(styles.title)}><img className={css(styles.logo)} src={Logo} /></h1>
        </IndexLink>
        { location.pathname != '/' && <Nav /> }
        {children}
        <footer className={css(styles.footer)}>
          {/* Copyright © 2016 <a className={css(styles.footerLink)} href='http://twitter.com/chrisfitkin' target='_blank'>Chris Fitkin</a> */}
          Copyright © 2016 RedeemStar, LLC
        </footer>
      </div>
    </MuiThemeProvider>
  )
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 1140,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem',
    textAlign: 'center'
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 56,
    textAlign: 'center'
  },
  logo: {
    maxWidth: 250
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App
