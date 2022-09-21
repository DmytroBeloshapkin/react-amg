import {axiosService} from "./axios.service.api";

import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    getByID: (id) => axiosService.get(`${urls.cars}/${id}`),
    updateByID: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteByID: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}