import React from 'react'

/**
 * Helper method to dynamically render form field elements incorporating redux-form validation
 */
export default ({input, label, type, meta: {error, touched}}) => {
    return (
        <div className="form-field">
            <label>{label}</label>
            <input {...input} type={type}/>
            <div className="form-validation">
                {touched && error}
            </div>
        </div>
    )
}