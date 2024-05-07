import axios from "axios"
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';


export const getPostById = async (id) => {
    return await axios.get(`/user/${id}`)
}
