import {axiosService} from "./axios.api.service";

import {urls} from "../config";

const userService = {
    getAll: () => axiosService.get(urls.users)
}

export {
    userService
}