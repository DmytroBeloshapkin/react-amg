import axios from "axios";
import {baseURl} from "../configs";



let axiosService = axios.create({
    baseURL: baseURl,
    headers: {'Content-Type': 'application/json'}
})

export {
    axiosService
}