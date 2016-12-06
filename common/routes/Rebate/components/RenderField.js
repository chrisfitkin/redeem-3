import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import TextField from 'material-ui/TextField'

const RenderField = ({ input, label, type, meta: { asyncValidating, touched, error }, ...props }) => (
  <div>
    <TextField hintText={label}
      floatingLabelText={label}
      className={css(styles.textField)}
      errorText={touched && error}
      {...props}
    />
    {asyncValidating && <span className={'async-indicator'}>...</span>}
  </div>
)

const styles = StyleSheet.create({
  label: {
    display: 'none'
  },
  textField: {
    fontSize: 18
  }
})

export default RenderField