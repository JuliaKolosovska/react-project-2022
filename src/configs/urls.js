const baseURL = 'https://api.themoviedb.org'

const urls = {
    movies:'/3/discover/movie',
    singleMovie: '/3/movie',
    auth: {
        login: '/auth',
        refresh: '/auth/refresh'
    },
}

export {
    baseURL,
    urls
}