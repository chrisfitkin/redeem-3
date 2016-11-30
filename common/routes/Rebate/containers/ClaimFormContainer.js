import React, { Component } from 'react'
import ClaimForm from '../components/ClaimForm';
import { reduxForm } from 'redux-form'

import validate, { asyncValidate } from './ClaimFormContainerValidate' // server side validation

const  mapStateToProps = (state, ownProps) => {
  return {
    // newPost: state.posts.newPost
  }
}

const mapDispatchToProps = dispatch => {

}

// function syncValidate(values) { // client side validation
//   loaded in imports above
// }

// function asyncValidate(values) { // server side validation
  // loaded in imports above
// }

const reduxFormConfig = {
  form: 'ClaimForm', // unique name for the state
  fields: [ // track fields for validate
    'firstName',
    'lastName',
    'email',
  ],
  asyncValidate: asyncValidate, // server validation callback
  asyncBlurFields: ['firstName', 'lastName', 'email'],
  validate: validate // client-side validation callback
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