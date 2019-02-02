import axios from 'axios'

export default {
    registerUser: function(user){
        return axios.get('/api/createUser')
    }
}