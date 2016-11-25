import React, { Component } from 'react'
import ClaimForm from '../components/ClaimForm';

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