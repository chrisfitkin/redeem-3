import React, { Component } from 'react'
import ClaimForm from '../components/ClaimForm';

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

function syncValidate(values) { // client side validation

}

function asyncValidate(values) { // server side validation
  
}

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

export default ClaimFormContainer