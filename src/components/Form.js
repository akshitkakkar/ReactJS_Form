import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {reduxForm, Field} from 'redux-form'
import _ from 'lodash'
import formFields from '../helpers/formFields'
import FormField from './FormField'

const validateEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/*
    * Pulling userLogin action creator from redux connect and handleSubmit from redux form
*/
const Form = ({userLogin, handleSubmit}) => {

    const renderFields = () => {

        return _.map(formFields, ({label, name, type}) => {
            return (
                <Field key={name} type={type} component={FormField} label={label} name={name}/>
            )
        })
    }

    return(
        <div className="form-login">
            <form onSubmit={handleSubmit(values => userLogin(values))}>
                <h3>Sign In</h3>
                {renderFields()}
                <div className="form-checkbox">
                    <input id="remember-login" type="checkbox" tabIndex="0"/>
                    <label htmlFor="remember-login">Remember Me?</label>
                </div>
                <button className="form-submit" type="submit">Sign In</button>
                <div className="form-help">
                    <a href="#">Forgot your password?</a>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                    <a href="#">Resend Email Confirmation</a>
                </div>
            </form>
        </div>
    )
}

/*
    * Validate function runs onBlur of input fields and right before handleSubmit
    * Checks for error in fields and blocks submission
*/
const validate = (values) => {
    const errors = {};

    _.each(formFields, ({name}) => {
        if(!values[name]) {
            errors[name] = "This field is mandatory"
        }
    })

    if(validateEmailRegEx.test(values["email"]) == false) {
        errors["email"] = "Please enter a valid email address"
    }

    return errors;
}

/*
    * Connecting to Redux Store and Redux Form
*/
export default reduxForm({
    validate,
    form: 'loginForm',
    destroyOnUnmount: true
})(connect(null, actions)(Form))