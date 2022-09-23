import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {'Content-Type': 'application/json'}
})

const getUser = () =>{
    return axiosInstance.get()}

const getUserID = (id) =>{
    return axiosInstance.get('/'+ id)}


export {getUser, getUserID}