const baseURL = 'https://api.themoviedb.org';

const img= 'https://image.tmdb.org/t/p/w500/';

// const apiKey='0995b0f52614f6de6fc7f60ea73e7824';
const urls = {
    movies: '/3/discover/movie?api_key=0995b0f52614f6de6fc7f60ea73e7824',
    search: '/3/search/movie?api_key=0995b0f52614f6de6fc7f60ea73e7824&query',
    genres: '/3/genre/movie/list?api_key=0995b0f52614f6de6fc7f60ea73e7824',

    // apiKey: '0995b0f52614f6de6fc7f60ea73e7824'
}

export {
    baseURL,
    urls,
    img
}

