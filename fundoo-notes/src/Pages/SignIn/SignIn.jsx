import './SignIn.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function UserSignIn() {
    return (
        <div className='MainDiv'>
            <div className='SignInForm'>
                <form className="FormBody">
                    <div className="Text Text1">Fundoo</div>
                    <div className="Text Text2">Sign In</div>
                    <div className="Text Text3">Use your Google Account</div>
                    <div className="InputBox">
                        <div >
                            {/* <input className="InputEmail Input" placeholder="Email or Phone" /> */}
                            <TextField id="outlined-basic" className="InputEmail Input" label="Email or Phone" variant="outlined"/>
                        </div>
                        <div >
                            {/* <input className="InputPassword Input" placeholder="Password" /> */}
                            <TextField id="outlined-basic" className="InputPassword Input" label="Password" variant="outlined" />
                        </div>
                    </div>
                    <div className='ForgotPasswordText'>
                        <div>Forgot Password?</div>
                    </div>
                    <div className="TextInfo">
                        <div>Not your computer? Use Guest mode to sign in privately.</div>
                        <div className="TextInfo2">Learn more.</div>
                    </div>
                    <div className="CreateAccountLogin">
                        <a className="CreateAccountLink">Create Account</a>
                        {/* <button className="LoginButton">Next</button> */}
                        <Button className='LoginButton' variant="contained">Next</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default UserSignIn;