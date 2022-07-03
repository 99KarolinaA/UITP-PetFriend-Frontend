import axios from "../axios/axios";

const UserRepository = {
    registerUser: (username, email, password, location, role) => {
        return axios.post("/auth/signup", {
            username, email, password, location, role
        })
    },
    loginUser: (username, password) => {
        return axios.post("/auth/login", {
            username, password
        })
    },
    getAllPetFriendsByLocation: (location) => {
        return axios.post("/users/byRoleAndLocation", {
            "role": "PetFriend", location
        })
    },
    getAllPetOwnersByLocation: (location) => {
        return axios.post("/users/byRoleAndLocation", {
            "role": "PetOwner",
            "location": location
        })
    }

}

export default UserRepository;