import axios from 'axios'

export default {
    registerUser: function(userData){
        return axios.post('/api/users', userData)
    },
    signIn: function(credentials) {
        return axios.get('/api/users', {
            params: {
                username: credentials.username,
                email: credentials.email, 
                password: credentials.password
            }
        })
    }
}