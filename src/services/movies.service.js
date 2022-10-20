import {axiosService} from "./axios.service";
import {urls} from "../configs";


const moviesService={
    getAll: (page)=>axiosService.get(`${urls.movies}?page=${page}`),
    searchByTitle: (title)=>axiosService.get(`${urls.search}/keyword?query=${title}`)
}

export {
   moviesService
}