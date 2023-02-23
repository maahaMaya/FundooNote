import './SignIn.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SignInApi } from '../../Services/User';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function UserSignIn() {
    const [UserDetails, setUserDetails] = useState({email:'', password:''});
    const [regexDetails, setRegexDetails] = useState({emailError:false, emailHelperText:'', passwordError:false, passwordHelperText:''});

    const InputUserEmail = (e) => {
        //setUserDetails({email:e.target.value});
        setUserDetails(preState => ({...preState, email:e.target.value}));
    }
    
    const InputUserPassword = (e) => {
            setUserDetails(preState => ({...preState, password:e.target.value}));
    }

    const LoginButtonClick = () => {

        if(emailRegex.test(UserDetails.email) === false){
            setRegexDetails(preState => ({...preState, emailError:true, emailHelperText:"this is wrong email"}));
        }
        else if(emailRegex.test(UserDetails.email) === true){
            setRegexDetails(preState => ({...preState, emailError:false, emailHelperText:""}));
        }

        if(passwordRegex.test(UserDetails.password) === false){
            setRegexDetails(preState => ({...preState, passwordError:true, passwordHelperText:"this is wrong password"}));
        }
        else if(passwordRegex.test(UserDetails.password) === true){
            setRegexDetails(preState => ({...preState, passwordError:false, passwordHelperText:""}));
        }

        if(regexDetails.emailError === false && regexDetails.passwordError === false){
            SignInApi(UserDetails)
            .then(response => {
                console.log(response)
                localStorage.setItem("token",response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    return (
        <div className='MainDiv'>
            <div className='SignInForm'>
                <form className="FormBody">
                    <div className="Text Text1">Fundoo</div>
                    <div className="Text Text2">Sign In</div>
                    <div className="Text Text3">Use your Google Account</div>
                    <div className="InputBox">
                        <div >
                            <TextField
                                id="outlined-basic"
                                className="InputEmail Input"
                                label="Email or Phone"
                                variant="outlined"
                                onChange={InputUserEmail}
                                error={regexDetails.emailError}
                                helperText={regexDetails.emailHelperText}
                            />
                        </div>
                        <div >
                            <TextField
                                id="outlined-basic"
                                className="InputPassword Input"
                                label="Password"
                                variant="outlined"
                                onChange={InputUserPassword}
                                error={regexDetails.passwordError}
                                helperText={regexDetails.passwordHelperText}
                            />
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
                        <a href='' className="CreateAccountLink">Create Account</a>
                        <Button
                            className='LoginButton'
                            variant="contained"
                            onClick={LoginButtonClick}
                        >Next</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UserSignIn;