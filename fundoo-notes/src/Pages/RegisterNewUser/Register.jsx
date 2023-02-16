import './Register.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function RegisterNewUser() {
    return (
        <div className='NewUserForm'>
            <form className='NewUserFormBody'>
                <div className='InputContainer'>
                    <div className='TextLogo'>Fundoo</div>
                    <div className='TextLogo1'>Create your Google Account</div>
                    <div className='TextLogo2'>to continue to Gmail</div>
                    <div className='NameContainer'>
                        {/* <input type="text" placeholder="First Name" className='InputName' />
                        <input type="text" placeholder="Last Name" className='InputName' /> */}
                        <TextField id="outlined-basic" className='InputName' label="First Name" variant="outlined" size='small' />
                        <TextField id="outlined-basic" className='InputName' label="Last Name" variant="outlined" size='small' />
                    </div>
                    <div className='EmailContainer'>
                        {/* <input type="text" placeholder="UserName" className='InputGmail' /> */}
                        <TextField id="outlined-basic" className='InputGmail' label="UserName" variant="outlined" size='small' />
                        <div className='EmailBelowText'>You can use letters, numbers and peroids</div>
                    </div>
                    <div className='PasswordContainer'>
                        {/* <input type="password" placeholder="Password" className='InputPassword' />
                        <input type="password" placeholder="Confirm" className='InputPassword' /> */}
                        <TextField id="outlined-basic" className='InputPassword' label="Password" variant="outlined" size='small' />
                        <TextField id="outlined-basic" className='InputPassword' label="Confirm" variant="outlined" size='small' />
                    </div>
                    <div className='TextBelowPassword'>
                        <div>Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    </div>
                    <div className='CheckBoxContainer'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Show Password" />
                        </FormGroup>
                    </div>
                    <div className="CreateAccount">
                        <a className="LoginLink">Sign in instead</a>
                        {/* <button className="CreateAccountButton">Next</button> */}
                        <Button className='LoginButton' variant="contained">Next</Button>
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