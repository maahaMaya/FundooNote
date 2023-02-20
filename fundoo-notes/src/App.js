import logo from './logo.svg';
import './App.css';
import RegisterNewUser from './Pages/RegisterNewUser/Register';
import UserSignIn from './Pages/SignIn/SignIn'
import ResponsiveAppBar from './Pages/Header/Header'
import NoteBookConatiner from './Pages/NoteBox/NoteBox'
import InputCardBox from './Pages/InputCardBox/InputCardBox'
import InputBox from './Pages/InputBox/InputBox';

function App() {
  return (
    <>
     {/* <UserSignIn/> */}
      {/* <RegisterNewUser/> */}
     <ResponsiveAppBar/>
     <NoteBookConatiner/> 
     <InputCardBox/>
     <InputBox/>
     
    </>
  );
}

export default App;