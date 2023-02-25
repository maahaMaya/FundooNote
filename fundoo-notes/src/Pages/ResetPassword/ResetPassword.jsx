import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ForgotPasswordApi, ResetPasswordApi } from '../../Services/UserService';
import { useNavigate } from 'react-router-dom';
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export default function ResetPassword() {
    let navigate = useNavigate();
    const [passwordDetails, setPasswordDetails] = useState({ password: '', confirmPassword: '' })
    const [passwordInput, setPasswordInput] = useState({passwordError:false, passwordHelperText: '', confirmPasswordError: false, confirmPasswordHelper:'' })
    
    const PasswordFun = (e) => {
        setPasswordDetails(preState => ({ ...preState, password: e.target.value }))
    }
    const ConfirmPasswordFun = (e) => {
        setPasswordDetails(preState => ({ ...preState, confirmPassword: e.target.value }))
    }

    const ResetPasswordButton = () => {
        let testPassword = passwordRegex.test(passwordDetails.password)
        let testConfirmPassword = passwordRegex.test(passwordDetails.confirmPassword)
        let matchPassword = (passwordDetails.testConfirmPassword === passwordDetails.testPassword);
        if(testPassword == false){
            setPasswordInput(preState => ({ ...preState, passwordError:true, passwordHelperText: "Enter Write Password" }))
        }
        else{
            setPasswordInput(preState => ({ ...preState, passwordError:false, confirmPasswordHelper: "" }))
        }

        if(testConfirmPassword == false){
            setPasswordInput(preState => ({ ...preState, confirmPasswordError:true, confirmPasswordHelper: "Enter Write Password" }))
        }
        else{
            setPasswordInput(preState => ({ ...preState, confirmPasswordError:false, confirmPasswordHelper: "" }))
        }
        if( testPassword === true && testConfirmPassword === true &&  matchPassword  === true){
            console.log("reset password")
            let passwordData = {
                "newPassword": passwordDetails.password,
                "confirmPassword": passwordDetails.confirmPassword
              }
            ResetPasswordApi(passwordData)
            .then(response => {
                console.log(response)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
        }
        else{
            setPasswordInput(preState => ({ ...preState, passwordError:true, passwordHelperText: "Enter Same Password", confirmPasswordError:true, confirmPasswordHelper: "Enter Same Password"}))
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Paper sx={{ width: '30vw', height: '70vh' }} variant="outlined" >
                    <div className="Text Text1">Fundoo</div>
                    <div className="Text Text2">Find your email</div>
                    <div className="Text Text3">Enter your phone number or recovery email</div>
                    <TextField
                        sx={{ width: '80%', margin: '3vw' }}
                        id="outlined-basic1"
                        label="Password"
                        variant="outlined"
                        error={passwordInput.passwordError}
                        helperText={passwordInput.passwordHelperText}
                        onChange={PasswordFun}
                    />
                    <TextField
                        sx={{ width: '80%', margin: '0vw 3vw 3vw 3vw' }}
                        id="outlined-basic2"
                        label="Confirm Password"
                        variant="outlined"
                        error={passwordInput.confirmPasswordError}
                        helperText={passwordInput.confirmPasswordHelper}
                        onChange={ConfirmPasswordFun}
                    />
                    <Button
                        variant="contained"
                        sx={{ float: 'right', marginRight: '10%', textTransform: 'none' }}
                        onClick={ResetPasswordButton}>Reset Password</Button>
                </Paper>
            </div>
        </div>

    );
}