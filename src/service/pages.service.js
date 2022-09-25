import {axiosServiceApi} from "./axios.service.api";
import {urls} from "../urls";

const pageService = {

    getTodos: () => axiosServiceApi.get(urls.todos),
    getAlbums: () => axiosServiceApi.get(urls.albums),
    getComments: () => axiosServiceApi.get(urls.comments),
    getPost: () => axiosServiceApi.get(urls.posts),
    getUsers: () => axiosServiceApi.get(urls.users)
}
export {pageService}

