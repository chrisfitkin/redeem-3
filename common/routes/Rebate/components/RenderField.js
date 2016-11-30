import React, { Component } from 'react'

const RenderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
      {asyncValidating && <span className={'async-indicator'}>...</span>}
    </div>
  </div>
)

export default RenderField