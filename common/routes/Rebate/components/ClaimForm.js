import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FileInput from './FileInput'
import ReduxFormDropzone from '../../../components/ReduxFormDropzone'
import RenderField from './RenderField'
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { StyleSheet, css } from 'aphrodite'

// https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.v1jey3pdd

// review for use of .touched input property passing from state to props
// http://redux-form.com/6.2.0/examples/asyncValidation/




const ClaimForm = (props) => {

  // const {asyncValidating, fields: { firstName, lastName, email, uploads, rebateCode }, handleSubmit, submitting, newPost } = this.props;
  const {asyncValidating, fields, handleSubmit, submitting, newPost } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={RenderField} label="First Name"/>
      <Field name="lastName" type="text" component={RenderField} label="Last Name" />
      <Field name="email" type="text" component={RenderField} label="Email" />
      <Field name="rebateCode" type="text" component={RenderField} label="Rebate Code" />

      
    <div>
      <br/>
      <h3>How do you want to get paid?</h3>
      <br/>
      <RadioButtonGroup name="paymentMethod" defaultSelected="mastercard">
      <RadioButton
        value="mastercard"
        label="MasterCard Send"
        style={styles.radioButton}
      />
      <RadioButton
        value="venmo"
        label="Venmo"
        style={styles.radioButton}
      />
      <RadioButton
        value="paypal"
        label="PayPal"
        style={styles.radioButton}
      />
      <RadioButton
        value="square"
        label="SquareCash"
        style={styles.radioButton}
      />
      </RadioButtonGroup>
    </div>

      <div>
        <br/>
        <Field
          type="file"
          name="photo"
          component={FileInput}
        />
        <br/>
        <br/>
        <br/>
      </div>
      {/* <div>
        <Field
          name={"files"}
          component={ReduxFormDropzone}
          multiple={false}
          dropzoneOnDrop={this.handleDrop}
        />
      </div> */}
      <RaisedButton 
        label="Submit Claim" 
        fullWidth={true}
        type="submit" 
      />
    </form>
  )
}


const styles = {
  dropzone: {},
  RadioButtonContainer: {
    textAlign: 'left'
  },
  radioButton: {
    maxWidth: 200,
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

// Decorate the form component
// ClaimForm = reduxForm({
//   form: 'claimRebate' // a unique name for this form
// })(ClaimForm)

export default ClaimForm