import axios from "axios";

import {baseURL} from "../urls";


let axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'}
});

export {axiosInstance}
