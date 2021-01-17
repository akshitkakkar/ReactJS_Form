import React from 'react'

const Form = () => {
    return(
        <div className="form-login">
            <form>
                <h3>Sign In</h3>
                <div className="form-field">
                    <label>First Name</label>
                    <input type="text" name="first-name"/>
                </div>
                <div className="form-field">
                    <label>Last Name</label>
                    <input type="text" name="last-name"/>
                </div>
                <div className="form-checkbox">
                    <input id="remember-login" type="checkbox" tabindex="0"/>
                    <label for="remember-login">Remember Me?</label>
                </div>
                <button class="form-submit" type="submit">Sign In</button>
                <div className="form-help">
                    <a href="#">Forgot your password?</a>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                    <a href="#">Resend Email Confirmation</a>
                </div>
            </form>
        </div>
    )
}

export default Form