import React from 'react'

export default ({input, label, loginCredentials, meta: {error, touched}}) => {
    return (
        <div className="form-field">
            <label>{label}</label>
            <input {...input} type="text"/>
            <div className="form-validation">
                {touched && error}
            </div>
        </div>
    )
}