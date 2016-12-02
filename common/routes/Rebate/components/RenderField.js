import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const RenderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label className={css(styles.label)}>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
      {asyncValidating && <span className={'async-indicator'}>...</span>}
    </div>
  </div>
)

const styles = StyleSheet.create({
  label: {
    display: 'none'
  }
})

export default RenderField