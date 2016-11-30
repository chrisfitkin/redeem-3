const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const validate = values => {
  const errors = {}

  // firstName
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  // lastName
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }

  // email
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  console.log("====== errors =====")
  console.log(errors)
  return errors
}

export const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {

      // firstName
      if (values.firstName == 'chris') {
        throw { firstName: 'Can\'t be chris :( '}
      }

    })
}

export default validate