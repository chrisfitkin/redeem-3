import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Nav = () => (
  <div>
    <IndexLink to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
      Home
    </IndexLink>
    <Link to='/rebates' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}> Rebates
    </Link>
    {/*
    <a href='https://github.com/jaredpalmer/react-production-starter' className={css(styles.link)} target='_blank'>GitHub</a>
    <a href='https://twitter.com/jaredpalmer' className={css(styles.link)} target='_blank'>Twitter</a>
    */}
  </div>
)

const styles = StyleSheet.create({
  link: {
    maxWidth: 1140,
    color: '#999',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.6
    }
  },
  activeLink: {
    color: '#fff'
  }
})

export default Nav
