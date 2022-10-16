import {axiosService} from "./axios.service";
import {urls} from "../configs";


const moviesService={
    getAll:(page=1)=>axiosService.get(urls.movies,{params:{page}}),
    addPhotoById: (id, data) => axiosService.patch(`${urls.cars}/${id}`, data)
}

export {
   moviesService
}