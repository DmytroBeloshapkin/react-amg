import axios from "axios";

import {baseURl} from "../configs";

const axiosService = axios.create({baseURl});

export {
    axiosService
}