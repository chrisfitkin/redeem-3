import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FileInput from './FileInput'
import ReduxFormDropzone from '../../../components/ReduxFormDropzone'
import RenderField from './RenderField'
import RaisedButton from 'material-ui/RaisedButton';

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
        <Field
          type="file"
          name="photo"
          component={FileInput}
        />
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


const style = {
  dropzone: {}
}

// Decorate the form component
// ClaimForm = reduxForm({
//   form: 'claimRebate' // a unique name for this form
// })(ClaimForm)

export default ClaimForm