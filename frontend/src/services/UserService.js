import axios from "axios"

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users"

class UserService {
    //Create
    createUser(user) {
        return axios.post(USER_API_BASE_URL, user)
    }

    //List
    getAllUsers() {
        return axios.get(USER_API_BASE_URL)
    }

    //Find
    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + "/" + userId)
    }

    //Update
    updateUser(userId, user) {
        return axios.put(USER_API_BASE_URL + "/" + userId, user)
    }

    //Delete
    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + "/" + userId)
    }
}

export default new UserService()