import React from 'react';

const MovieInfo = ({movieInfo}) => {

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>vote_count: {vote_count}</div>
            <div>vote_average: {vote_average}</div>
            <div>overview: {overview}</div>

        </div>
    );
};
export {MovieInfo};
