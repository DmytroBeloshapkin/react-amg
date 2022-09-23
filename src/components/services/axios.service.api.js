import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/api/v2/cars',
    headers: {'Content-Type': 'application/json'}
})

const get = () =>{
    return axiosInstance.get()}

const getID = (id) =>{
    return axiosInstance.get('/'+ id)}


export {get, getID}