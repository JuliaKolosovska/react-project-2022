const baseURL = 'https://api.themoviedb.org'


// const apiKey='0995b0f52614f6de6fc7f60ea73e7824';
const urls = {
    movies:'/3/discover/movie?page={page}',
    singleMovie: '/3/movie?api_key=0995b0f52614f6de6fc7f60ea73e7824&language=en-US',
    auth: {
        login: '/auth',
        refresh: '/auth/refresh'
    },
    poster: '/movie/{id}/images?api_key=0995b0f52614f6de6fc7f60ea73e7824&language=en-US'
}

export {
    baseURL,
    urls
}