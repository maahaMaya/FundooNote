import axios from 'axios'
export const SignInApi = (data) => {
    const response = 
    axios.post('https://localhost:44386/api/User/UserLogin', data)
    return response
}

export const RegisterNewUserApi = (data) => {
    const response = 
    axios.post('https://localhost:44386/api/User/UserRegistration', data)
    return response
}