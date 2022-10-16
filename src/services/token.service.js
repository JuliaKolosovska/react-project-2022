import {axiosService} from "./axios.service";

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTk1YjBmNTI2MTRmNmRlNmZjN2Y2MGVhNzNlNzgyNCIsInN1YiI6IjYzNDliMDYzYjdhYmI1MDA3ZWQ0ZTIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aup_xBfBXXeGhh_9Lf8ryBiybnjXQv2NjMHU3iK6CQ0`

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`
    return config
})
export {token}