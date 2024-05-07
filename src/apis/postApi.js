import axios from "axios"
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const getAllPost = async () => {
    return await axios.get("/posts")
}
export const getPostById = async (id) => {
    return await axios.get(`/posts/${id}`)
}
export const gdeletePost = async (id) => {
    return await axios.delete(`/posts/${id}`)
}
export const createPost = async (data) => {
    return await axios.post(`/posts`, data)
}
export const updatePost = async (id, updateData) => {
    return await axios.patch(`/posts/${id}`, updateData)
}
