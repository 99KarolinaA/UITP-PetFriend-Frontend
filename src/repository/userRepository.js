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
    },
    reserve: (petFriendName) => {
        return axios.post("/reservations/create", {
            "sitter": petFriendName
        })
    },
    getReservationsByPetOwner: ()=> {
        return axios.get("/reservations/byPetOwner");
    },
    getReservationsByPetFriend: (confirmation)=> {
        return axios.post("/reservations/byPetFriend", {
            "confirmation": confirmation
        });
    },
    deleteReservation: (id) => {
        return axios.post(`/reservations/delete?id=${id}`)
    }

}

export default UserRepository;