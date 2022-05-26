import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth"

class AuthService{
    //Login
    authenticateUser(user){
        return axios.post(AUTH_API_BASE_URL + "/signin", user)
        .then(response => {
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    //Register
    registerUser(user){
        return axios.post(AUTH_API_BASE_URL + "/signup", user)
    }

    //Logout
    logout(){
        localStorage.removeItem("user");
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService()