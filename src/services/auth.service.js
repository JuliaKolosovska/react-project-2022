// import {axiosService} from "./axios.service";
// import {urls} from "../configs";
//
//
// const _accessToken = 'access'
// const _refreshToken = 'refresh'
// const authService = {
//     register: (user) => axiosService.post(urls.movies, user),
//     login: (user) => axiosService.post(urls.movies.login, user),
//     refresh: (token) => axiosService.post(urls.auth.refresh, {token}),
//
//     setTokens: ({access, refresh}) => {
//         localStorage.setItem(_accessToken, access);
//         localStorage.setItem(_refreshToken, refresh);
//     },
//     deleteToken:()=>{
//         localStorage.removeItem(_accessToken)
//         localStorage.removeItem(_refreshToken)
//     },
//     getAccessToken:()=>localStorage.getItem(_accessToken),
//     getRefreshToken:()=>localStorage.getItem(_refreshToken),
//
// }
//
// export {
//     authService
// }