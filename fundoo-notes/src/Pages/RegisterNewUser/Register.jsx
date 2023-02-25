import './Register.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RegisterNewUserApi } from '../../Services/UserService';
import { useNavigate } from 'react-router-dom';

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function RegisterNewUser() {

    const [UserRegister, setUserRegister] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const [RegexRegister, setRegexRegister] = useState({ firstNameError: false, firstNameHelperText: '', lastNameError: false, lastNameHelperText: '', emailError: false, emailHelperText: '', passwordError: false, passwordHelperText: '', confirmPasswordError: false, confirmPasswordHelperText: '', passwordMatchError: false });
    const [PasswordShow, setPasswordShow] = useState({passwordVisible:'password'});

    let navigate = useNavigate();

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
        let firstNameTest = nameRegex.test(UserRegister.firstName);
        let lastNameTest = nameRegex.test(UserRegister.lastName);
        let emailTest = emailRegex.test(UserRegister.email);
        let passwordTest = passwordRegex.test(UserRegister.password);
        let confirmPasswordTest = passwordRegex.test(UserRegister.confirmPassword);
        let checkPasswordsEqual = ( UserRegister.password === UserRegister.confirmPassword)
        if (firstNameTest === false) {
            setRegexRegister(preState => ({ ...preState, firstNameError: true, firstNameHelperText: "firstLetterCapital" }))
        }
        else if (firstNameTest === true) {
            setRegexRegister(preState => ({ ...preState, firstNameError: false, firstNameHelperText: "" }))
        }

        if (lastNameTest === false) {
            setRegexRegister(preState => ({ ...preState, lastNameError: true, lastNameHelperText: "firstLetterCapital" }))
        }
        else if (lastNameTest === true) {
            setRegexRegister(preState => ({ ...preState, lastNameError: false, lastNameHelperText: "" }))
        }

        if (emailTest === false) {
            setRegexRegister(preState => ({ ...preState, emailError: true, emailHelperText: "Enter correct email" }))
        }
        else if (emailTest === true) {
            setRegexRegister(preState => ({ ...preState, emailError: false, emailHelperText: "" }))
        }

        if (passwordTest === false) {
            setRegexRegister(preState => ({ ...preState, passwordError: true, passwordHelperText: "EnterWritePassword" }))
        }
        else if (passwordTest === true) {
            setRegexRegister(preState => ({ ...preState, passwordError: false, passwordHelperText: "" }))
        }

        if (confirmPasswordTest === false) {
            setRegexRegister(preState => ({ ...preState, confirmPasswordError: true, confirmPasswordHelperText: "EnterWritePassword" }))
        }
        else if (confirmPasswordTest === true) {
            setRegexRegister(preState => ({ ...preState, confirmPasswordError: false, confirmPasswordHelperText: "" }))
        }


        if(firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true && confirmPasswordTest === true && checkPasswordsEqual === true){
            RegisterNewUserApi(UserRegister)
            .then(response => {
                console.log(response)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
        }
        
    }

    const ShowPasswordButton = (e) => {
        //console.log(e.target.checked)
        if((e.target.checked)===true){
            console.log("T");
            setPasswordShow({passwordVisible:'text'});
        }
        else{
            console.log("N");
            setPasswordShow({passwordVisible:'password'});
        }
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
                            id="outlined-basic1"
                            onChange={InputFirstName}
                            error={RegexRegister.firstNameError}
                            helperText={RegexRegister.firstNameHelperText}
                            className='InputName'
                            label="First Name"
                            variant="outlined"
                            size='small' />
                        <TextField
                            id="outlined-basic2"
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
                            id="outlined-basic3"
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
                            id="outlined-basic4"
                            onChange={InputPassword}
                            error={RegexRegister.passwordError}
                            helperText={RegexRegister.passwordHelperText}
                            className='InputPassword'
                            label="Password"
                            variant="outlined"
                            type={PasswordShow.passwordVisible}
                            size='small' />
                        <TextField
                            id="outlined-basic5"
                            onChange={InputConfirmPassword}
                            error={RegexRegister.confirmPasswordError}
                            helperText={RegexRegister.confirmPasswordHelperText}
                            className='InputPassword'
                            label="Confirm"
                            variant="outlined"
                            type={PasswordShow.passwordVisible}
                            size='small' />
                    </div>
                    <div className='TextBelowPassword'>
                        <div>Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    </div>
                    <div className='CheckBoxContainer'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox   onChange={ShowPasswordButton}/>} label="Show Password" />
                        </FormGroup>
                    </div>
                    <div className="CreateAccount">
                    <Button onClick={() => navigate('/')} className="LoginLink" variant="text" sx={{ textTransform: 'none' }}>Sign in instead</Button>
                        <Button
                            className='LoginButton'
                            onClick={RegisterButton}
                            variant="contained">Next</Button>
                    </div>
                </div>
                <div className='ImageConatiner'>
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="FundooLogo" className='Image' />
                    <figcaption className='figText'>One account. All of Google working for you.</figcaption>
                </div>
            </form>
        </div>
    )
};
export default RegisterNewUser;