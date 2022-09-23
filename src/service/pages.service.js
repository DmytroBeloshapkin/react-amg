import {axiosInstance} from "./axios.service.api";
import {baseURL, urls} from "../urls";

const pageService = {

    getTodos: () => axiosInstance(urls.todos),
    getAlbums: () => axiosInstance(urls.albums),
    getComments: () => axiosInstance(urls.comments),
    getPost: () => axiosInstance(urls.posts),
    getUsers: () => axiosInstance(urls.users),
}
export {pageService}

