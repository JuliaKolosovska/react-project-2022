import React from 'react';

const MoviesListCard = ({movie}) => {
    const{id, title, vote_average, poster_path} = movie;

    const image_path = 'https://image.tmdb.org/t/p/w500'

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>{vote_average}</div>
            <div>
                {poster_path && <img src={`${image_path}${poster_path}`} alt={title}/>}
            </div>
        </div>
    );
};

export {MoviesListCard};