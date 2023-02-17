import axios from 'axios'
export const SignInApi = (data) => {
    console.log("before")
    const response = 
    axios.post('https://localhost:44386/api/User/UserLogin', data)
    console.log("after")
    return response
}