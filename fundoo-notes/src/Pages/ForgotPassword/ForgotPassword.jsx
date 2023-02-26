import './ForgotPassword.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ForgotPasswordApi } from '../../Services/UserService';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export default function ForgotPassword() {
    const [emailDetails, setEmailDetails] = useState({ emailDetailsValue: '', emailDetailsError: false, emailDetailsHelperText: '', emailDetailsLabel: 'Email or Phone', emailDetailsDisabled: false })
    const [displayOTP, setDisplayOTP] = useState({ displayOTPValue: '', display: 'none' })
    const [buttonLogin, setButtonLogin] = useState('Next')
    let navigate = useNavigate();

    const [funCallValue, setFunCallValue] = useState(true);
    const FunCall = (e) => {
        if (funCallValue === true) {
            let secondFun = ForgotPasswordButton(e)
            if (secondFun) {
                setFunCallValue(false)
            }
        }
        else {
            ForgotEmailValues(e)
        }
    }
    const ForgotPasswordButton = (e) => {

        let testEmail = emailRegex.test(emailDetails.emailDetailsValue)
        if (testEmail === true) {
            setEmailDetails({ emailDetailsError: false, emailDetailsHelperText: '' })
        } else if (testEmail === false) {
            setEmailDetails({ emailDetailsError: true, emailDetailsHelperText: 'Enter Correct Email' })
        }
        if (testEmail === true) {

            let passwordFogotData = {
                "email": emailDetails.emailDetailsValue
            }
            console.log(passwordFogotData)
            ForgotPasswordApi(passwordFogotData)
                .then(response => {
                    if (response.data.success === true) {
                        setDisplayOTP({ display: '' })
                        setButtonLogin('Validate OTP')
                        setEmailDetails({ emailDetailsDisabled: true, emailDetailsLabel: emailDetails.emailDetailsValue })
                    }
                })
                .catch(err => {
                    console.log(err)
                    return false
                })
            return true
        }
    }

    const ForgotEmailValue = (e) => {
        setEmailDetails(preState => ({ ...preState, emailDetailsValue: e.target.value }))
    }

    const OtpValidater = (e) => {
        setDisplayOTP(preState => ({ ...preState, displayOTPValue: e.target.value }))
    }

    const ForgotEmailValues = () => {
        console.log(displayOTP)
        if (displayOTP.displayOTPValue) {
            localStorage.setItem("token", displayOTP.displayOTPValue)
            navigate('/resetPassword')
        }
    }

    return (
        <div className='ForgotPasswordMainDiv'>
            <div>
                <Paper sx={{ width: '30vw', height: '70vh' }} variant="outlined" >
                    <div className="Text Text1">Fundoo</div>
                    <div className="Text Text2">Find your email</div>
                    <div className="Text Text3">Enter your phone number or recovery email</div>
                    <TextField
                        sx={{ width: '80%', margin: '3vw' }}
                        id="outlined-basic1"
                        label={emailDetails.emailDetailsLabel}
                        variant="outlined"
                        disabled={emailDetails.emailDetailsDisabled}
                        error={emailDetails.emailDetailsError}
                        helperText={emailDetails.emailDetailsHelperText}
                        // onChange={() => setEmailDetails(preState => ({...preState, emailDetailsValue: target.value}))}
                        onChange={ForgotEmailValue}
                    />
                    <TextField
                        sx={{ width: '80%', margin: '0vw 3vw 3vw 3vw', display: displayOTP }}
                        id="outlined-basic2"
                        label="Enter OTP"
                        variant="outlined"
                        error={emailDetails.emailDetailsError}
                        helperText={emailDetails.emailDetailsHelperText}
                        onChange={OtpValidater}
                    />
                    <Button
                        variant="contained"
                        sx={{ float: 'right', marginRight: '10%', textTransform: 'none' }}
                        onClick={FunCall}>{buttonLogin}</Button>
                </Paper>
            </div>
        </div>

    );
}