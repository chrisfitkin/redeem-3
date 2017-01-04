import React from 'react'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'
import AnimateFadeUp from '../../../components/AnimateFadeUp'
import { Button, Color, InputField } from '../../../style.js'
import TextField from 'material-ui/TextField'


// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const Home = (props) => (
  <div>
    <p className={css(styles.lead)}>
      Your Money. Your Way.
    </p>
    <div className={css(styles.spacer)} />
    <AnimateFadeUp>
      <Link to='/rebates' className={css(styles.buttonRebates)} activeClassName={css(styles.buttonRebates, styles.activeLink)}> 
        Explore rebates
      </Link>
    </AnimateFadeUp>
    <hr className={css(styles.hr)} />    
    <TextField hintText={'enter code'}
      floatingLabelText={'enter code'}
      className={css(styles.codeField)}
      style={{
        borderRadius: 2,
        padding: '0',
        marginBottom: 20,
        background: '#fff',
      }}
      {...props}
    /><br/>
    <Link to='/rebates' className={css(styles.buttonRedeem)}> 
      Redeem Code
    </Link>
  </div>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem'
  },
  lead: {
    paddingTop: 30,
    fontSize: 22,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 100
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  buttonRebates: {
    ...Button,
    color: Color.green,
    borderColor: Color.green,
  },
  buttonRedeem: {
    ...Button,
    color: Color.white,
    borderColor: Color.white,
  },
  spacer: {
    height: 60
  },
  hr: {
    color: '#fff',
    borderSize: '1px',
    maxWidth: 250,
    margin: '40px auto'
  },
  codeField: {
    ...InputField
  }
})

export default Home
