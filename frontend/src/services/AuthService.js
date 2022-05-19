import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth"

class AuthService{
    //Login
    authenticateUser(user){
        return axios.post(AUTH_API_BASE_URL + "/signin", user)
    }

    //Register
    registerUser(user){
        return axios.post(AUTH_API_BASE_URL + "/signup", user)
    }

    //Logout
    logoutUser(){
        return axios.post(AUTH_API_BASE_URL + "/signout")
    }
}

export default new AuthService()