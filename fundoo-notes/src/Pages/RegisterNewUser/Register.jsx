import './Register.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function RegisterNewUser() {

    const [UserRegister, setUserRegister] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const [RegexRegister, setRegexRegister] = useState({ firstNameError: false, firstNameHelperText: '', lastNameError: false, lastNameHelperText: '', emailError: false, emailHelperText: '', passwordError: false, passwordHelperText: '', confirmPasswordError: false, confirmPasswordHelperText: '', passwordMatchError: false });

    const InputFirstName = (e) => {
        setUserRegister(preState => ({ ...preState, firstName: e.target.value }))
    }
    const InputLastName = (e) => {
        setUserRegister(preState => ({ ...preState, lastName: e.target.value }))
    }
    const InputEmail = (e) => {
        setUserRegister(preState => ({ ...preState, email: e.target.value }))
    }
    const InputPassword = (e) => {
        setUserRegister(preState => ({ ...preState, password: e.target.value }))
    }
    const InputConfirmPassword = (e) => {
        setUserRegister(preState => ({ ...preState, confirmPassword: e.target.value }))
    }
    const RegisterButton = () => {

        if (nameRegex.test(UserRegister.firstName) === false) {
            setRegexRegister(preState => ({ ...preState, firstNameError: true, firstNameHelperText: "firstLetterCapital" }))
        }
        else if (nameRegex.test(UserRegister.firstName) === true) {
            setRegexRegister(preState => ({ ...preState, firstNameError: false, firstNameHelperText: "" }))
        }

        if (nameRegex.test(UserRegister.lastName) === false) {
            setRegexRegister(preState => ({ ...preState, lastNameError: true, lastNameHelperText: "firstLetterCapital" }))
        }
        else if (nameRegex.test(UserRegister.lastName) === true) {
            setRegexRegister(preState => ({ ...preState, lastNameError: false, lastNameHelperText: "" }))
        }

        if (emailRegex.test(UserRegister.email) === false) {
            setRegexRegister(preState => ({ ...preState, emailError: true, emailHelperText: "Enter correct email" }))
        }
        else if (emailRegex.test(UserRegister.email) === true) {
            setRegexRegister(preState => ({ ...preState, emailError: false, emailHelperText: "" }))
        }

        if (passwordRegex.test(UserRegister.password) === false) {
            setRegexRegister(preState => ({ ...preState, passwordError: true, passwordHelperText: "EnterWritePassword" }))
        }
        else if (passwordRegex.test(UserRegister.password) === true) {
            setRegexRegister(preState => ({ ...preState, passwordError: false, passwordHelperText: "" }))
        }

        if (passwordRegex.test(UserRegister.confirmPassword) === false) {
            setRegexRegister(preState => ({ ...preState, confirmPasswordError: true, confirmPasswordHelperText: "EnterWritePassword" }))
        }
        else if (passwordRegex.test(UserRegister.confirmPassword) === true) {
            setRegexRegister(preState => ({ ...preState, confirmPasswordError: false, confirmPasswordHelperText: "" }))
        }

        if (UserRegister.password === UserRegister.confirmPassword) {
            setRegexRegister(preState => ({ ...preState, passwordMatchError: false, passwordMatchHelperText: "" }))
        }
        else {
            console.log("password");
            setRegexRegister(preState => ({ ...preState, passwordMatchError: true }))
        }

        if (RegexRegister.passwordError === true) {
            setRegexRegister(preState => ({ ...preState, passwordError: true, passwordHelperText: "EnterSamePassword", confirmPasswordError: true, confirmPasswordHelperText: "EnterSamePassword" }))
        }
    }

    const ShowPasswordButton = (e) => {
        console.log("---", e.target.value)
    }

    return (
        <div className='NewUserForm'>
            <form className='NewUserFormBody'>
                <div className='InputContainer'>
                    <div className='TextLogo'>Fundoo</div>
                    <div className='TextLogo1'>Create your Google Account</div>
                    <div className='TextLogo2'>to continue to Gmail</div>
                    <div className='NameContainer'>
                        <TextField
                            id="outlined-basic"
                            onChange={InputFirstName}
                            error={RegexRegister.firstNameError}
                            helperText={RegexRegister.firstNameHelperText}
                            className='InputName'
                            label="First Name"
                            variant="outlined"
                            size='small' />
                        <TextField
                            id="outlined-basic"
                            onChange={InputLastName}
                            error={RegexRegister.lastNameError}
                            helperText={RegexRegister.lastNameHelperText}
                            className='InputName'
                            label="Last Name"
                            variant="outlined"
                            size='small' />
                    </div>
                    <div className='EmailContainer'>
                        <TextField
                            id="outlined-basic"
                            onChange={InputEmail}
                            error={RegexRegister.emailError}
                            helperText={RegexRegister.emailHelperText}
                            className='InputGmail'
                            label="UserName"
                            variant="outlined"
                            size='small' />
                        <div className='EmailBelowText'>You can use letters, numbers and peroids</div>
                    </div>
                    <div className='PasswordContainer'>
                        <TextField
                            id="outlined-basic"
                            onChange={InputPassword}
                            error={RegexRegister.passwordError}
                            helperText={RegexRegister.passwordHelperText}
                            className='InputPassword'
                            label="Password"
                            variant="outlined"
                            type="password"
                            size='small' />
                        <TextField
                            id="outlined-basic"
                            onChange={InputConfirmPassword}
                            error={RegexRegister.confirmPasswordError}
                            helperText={RegexRegister.confirmPasswordHelperText}
                            className='InputPassword'
                            label="Confirm"
                            variant="outlined"
                            type="text"
                            size='small' />
                    </div>
                    <div className='TextBelowPassword'>
                        <div>Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    </div>
                    <div className='CheckBoxContainer'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Show Password" />
                        </FormGroup>
                        {/* <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                onChange={ShowPasswordButton}
                                label="Show Password" />
                        </FormGroup> */}
                    </div>
                    <div className="CreateAccount">
                        <a className="LoginLink">Sign in instead</a>
                        <Button
                            className='LoginButton'
                            onClick={RegisterButton}
                            variant="contained">Next</Button>
                    </div>
                </div>
                <div className='ImageConatiner'>
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" className='Image' />
                    <figcaption className='figText'>One account. All of Google working for you.</figcaption>
                </div>
            </form>
        </div>
    )
};
export default RegisterNewUser;