import axios from 'axios';
import connection from '../utils/connection';

// Fetch user by email.
const fetchUserByEmail = (payload) => {
    console.log('TEST:', connection.host())
    const userData = axios.post(`${connection.host()}/users/`, payload)
        .then(response => {
            return response;
        })
        .catch((err) => {
            console.log('Error fetching users: ' + err);
        });

    return userData;
}

// Fetch user by id.
const fetchSingleUser = (id) => {
    const userData = axios.get(`${connection.host()}/users/user/` + id)
        .then(response => {
            return response;
        })
        .catch((err) => {
            console.log('Error fetching user: ' + err);
        });
    
    return userData;
}

// Fetch all user data.
const fetchAllUsers = () => {
    // Must change to JWT.
    const config = {
        headers: {
            'Authorization': 'admin-fetch'
        }
    }
    const userData = axios.get(`${connection.host()}/users/all`, config)
        .then(response => {
            return response;
        })
        .catch((err) => {
            console.log('Error fetching user: ' + err);
        });
    
    return userData;
}

// Add user data to database.
const addUser = (user) => {
    const postResponse = axios.post(`${connection.host()}/users/add`, user)
        .then(response => {
            return response;
        })
        .catch((err) => {
            console.log('Error adding user: ' + err);
        });

    return postResponse;
}

// Update user in database
const updateUser = (id, user) => {
    const postResponse = axios.post(`${connection.host()}/users/update/${id}`, user)
        .then(response => {
            return response;
        })
        .catch((err) => {
            console.log('Error updating user: ' + err);
        });

    return postResponse;
}

export {fetchUserByEmail, fetchSingleUser, addUser, updateUser, fetchAllUsers};