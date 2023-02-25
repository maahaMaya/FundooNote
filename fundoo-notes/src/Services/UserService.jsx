import axios from 'axios'
import { HeaderConfig } from "./DataService"
const UserApi = "https://localhost:44386/api/User"
export const SignInApi = (data) => {
    const response = 
    axios.post(`${UserApi}/UserLogin`, data)
    return response
}

export const RegisterNewUserApi = (data) => {
    const response = 
    axios.post(`${UserApi}/UserRegistration`, data)
    return response
}

export const ForgotPasswordApi = (data) => {
    const response = 
    axios.post("https://localhost:44386/api/User/ForgotPassword", data)
    return response
}

export const ResetPasswordApi = (data) => {
    const response = 
    axios.put(`${UserApi}/ResetPassword`, data, HeaderConfig)
    return response
}