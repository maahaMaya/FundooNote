import './Register.css';
function RegisterNewUser() {
    return (
        <>
            <form className="FormBody">
                <div className="Text Text1">Google</div>
                <div className="Text Text2">Sign In</div>
                <div className="Text Text3">Use your Google Account</div>
                <div className="InputBox">
                    <div >
                        <input className="InputEmail Input" placeholder="Email or Phone" />
                    </div>
                    <div >
                        <input className="InputPassword Input" placeholder="Password" />
                    </div>
                </div>
                <div className='ForgotEmail'>
                    <div>Forgot Password?</div>
                </div>
                <div className="TextInfo">
                    <div>Not your computer? Use Guest mode to sign in privately.</div>
                    <div className="TextInfo2">Learn more.</div>
                </div>
                <div className="CreateAccountLogin">
                    <a className="CreateAccountLink">Create Account</a>
                    <button className="LoginButton">Next</button>
                </div>
            </form>
        </>
    )
}
export default RegisterNewUser;