import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

//pulling userLogin action creator from props
const Form = ({userLogin}) => {

    const [loginCredentials, setLoginCredentials] = useState({email: '', password: ''})
    
    const onHandleChange = (event) => {
        setLoginCredentials({...loginCredentials, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        userLogin(loginCredentials);
    }

    return(
        <div className="form-login">
            <form>
                <h3>Sign In</h3>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text" id="email-field" value={loginCredentials.email} name="email" onChange={onHandleChange}/>
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="text" id="password-field" value={loginCredentials.password} name="password" onChange={onHandleChange}/>
                </div>
                <div className="form-checkbox">
                    <input id="remember-login" type="checkbox" tabIndex="0"/>
                    <label htmlFor="remember-login">Remember Me?</label>
                </div>
                <button onClick={submitHandler} className="form-submit" type="submit">Sign In</button>
                <div className="form-help">
                    <a href="#">Forgot your password?</a>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                    <a href="#">Resend Email Confirmation</a>
                </div>
            </form>
        </div>
    )
}

//connecting to Redux Store
export default connect(null, actions)(Form)