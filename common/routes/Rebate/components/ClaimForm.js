import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FileInput from './FileInput'
// import DropzoneDemo from './DropzoneDemo'
import ReduxFormDropzone from '../../../components/ReduxFormDropzone'

class ClaimForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
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
ClaimForm = reduxForm({
  form: 'claimRebate' // a unique name for this form
})(ClaimForm)

export default ClaimForm