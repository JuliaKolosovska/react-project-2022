import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MovieInfo} from "../movieInfo/MovieInfo";
import {moviesService} from "../../services";
import {getMovies} from "../../redux";
import {moviesSlice} from "../../redux";
import {useParams} from "react-router-dom";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";

const MoviesList = () => {

    const [currentPage, setCurrentPage] = useState();

    const {movies, errors} = useSelector(state => state.moviesReducer);



    const value = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(moviesService.getAll({currentPage}))
    },[dispatch, currentPage])

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    return (
        <div>

                {errors && <h3>{JSON.stringify(errors)}</h3>}
            {movies.results && movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}


        </div>
    )
}


export {MoviesList};