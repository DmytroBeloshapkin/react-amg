import axios from "axios";

import {baseURL} from "../urls";

let axiosServiceApi = axios.create({baseURL});

export {axiosServiceApi}
