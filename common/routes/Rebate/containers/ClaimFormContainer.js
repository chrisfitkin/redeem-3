import React, { Component } from 'react'
import ClaimForm from '../components/ClaimForm';
import { reduxForm } from 'redux-form'

const  mapStateToProps = (state, ownProps) => {
  console.log("===== mapStateToProps =====")
  console.log(state.form.ClaimForm.fields)
  return {
    // newPost: state.posts.newPost
    formFields: state.form.ClaimForm.fields
  }
}

const mapDispatchToProps = dispatch => {

}

function syncValidate(values) { // client side validation

}

function asyncValidate(values) { // server side validation
  
}

const reduxFormConfig = {
  form: 'ClaimForm', // unique name for the state
  fields: [ // track fields
    'firstName',
    'lastName',
    'email',
    'uploads',
    'rebateCode',
  ],
  asyncValidate: asyncValidate, // server validation callback
  asyncBlurFields: ['firstName', 'lastName'],
  syncValidate: syncValidate // client-side validation callback
}

const ClaimFormContainer = reduxForm(reduxFormConfig, mapStateToProps, mapDispatchToProps)(ClaimForm)

export default ClaimFormContainer

/*
class ClaimFormContainer extends React.Component {
  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
        <div>
            <h2>Claim Rebate</h2>
            <ClaimForm onSubmit={this.handleSubmit} />
        </div>
    );
  }
}
*/