import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import FileInput from './FileInput'
import ReduxFormDropzone from '../../../components/ReduxFormDropzone'


// https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.v1jey3pdd

// review for use of .touched input property passing from state to props
// http://redux-form.com/6.2.0/examples/asyncValidation/

class ClaimForm extends Component {
  
  static contextTypes = {
    ...propTypes,
  };


  render() {
    // const {asyncValidating, fields: { firstName, lastName, email, uploads, rebateCode }, handleSubmit, submitting, newPost } = this.props;
    const {asyncValidating, fields, handleSubmit, submitting, newPost } = this.props;
    const { firstname } = fields;
    console.log("========= this.props ========")
    console.log(this.props)

    console.log("========= fields ========")
    console.log(fields)
    console.log("========= firstName ========")
    // console.log(firstName)

    
    return (
      <form onSubmit={handleSubmit}>
        {/*
          <div className={`form-group ${firstName.touched && firstName.invalid ? 'has-error' : ''}`}>
          <label className="control-label" htmlFor="firstName">First Name*</label>
          <Field name="firstName" component="input" type="text" className="form-control" {...firstName} />
          <div className="help-block">
            {firstName.touched ? firstName.error : ''}
          </div>
          <div className="help-block">
            {asyncValidating === 'firstName'? 'validating..': ''}
          </div>
        </div>
        */}
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <Field
            type="file"
            name="photo"
            component={FileInput}
          />
        </div>
        <div>
          <Field
            name={"files"}
            component={ReduxFormDropzone}
            multiple={false}
            dropzoneOnDrop={this.handleDrop}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const style = {
  dropzone: {}
}

// Decorate the form component
// ClaimForm = reduxForm({
//   form: 'claimRebate' // a unique name for this form
// })(ClaimForm)

export default ClaimForm