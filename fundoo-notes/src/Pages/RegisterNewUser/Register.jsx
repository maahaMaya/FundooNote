import './Register.css'
function RegisterNewUser() {
    return (
        <div className='NewUserForm'>
            <form className='NewUserFormBody'>
                <div className='InputContainer'>
                    <div className='TextLogo'>Fundoo</div>
                    <div className='TextLogo1'>Create your Google Account</div>
                    <div className='TextLogo2'>to continue to Gmail</div>
                    <div className='NameContainer'>
                        <input type="text" placeholder="First Name" className='InputName' />
                        <input type="text" placeholder="Last Name" className='InputName' />
                    </div>
                    <div className='EmailContainer'>
                        <input type="text" placeholder="UserName" className='InputGmail' />
                        <div className='EmailBelowText'>You can use letters, numbers and peroids</div>
                    </div>
                    <div className='PasswordContainer'>
                        <input type="password" placeholder="Password" className='InputPassword' />
                        <input type="password" placeholder="Confirm" className='InputPassword' />
                    </div>
                    <div className='TextBelowPassword'>
                        <div>Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    </div>
                    <div className='CheckBoxContainer'>
                        <input type="checkbox" className='InputCheckBoxContainer' name="Password" value="" />
                        <label for="Password"> Show password</label>
                    </div>
                    <div>
                        <div className="CreateAccount">
                            <a className="LoginLink">Sign in instead</a>
                            <button className="CreateAccountButton">Next</button>
                        </div>
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