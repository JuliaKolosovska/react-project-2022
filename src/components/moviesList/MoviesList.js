import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MovieInfo} from "../movieInfo/MovieInfo";
import {moviesService} from "../../services";
import {getMovies} from "../../redux";
import {moviesSlice} from "../../redux";
import {useParams} from "react-router-dom";
import {Movie} from "../moviesListCard/MoviesListCard";


const MoviesList = () => {
    //
    // const [currentPage, setCurrentPage] = useState();
    //
    // const {movies, errors} = useSelector(state => state.moviesReducer);
    //
    //
    //
    // const value = useParams();
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(moviesService.getAll({currentPage}))
    // },[dispatch, currentPage])
    //
    // const paginate = (pageNumber) =>{
    //     setCurrentPage(pageNumber)
    // }
    // const {movies} = useSelector(state => state.moviesReducer);

    // const dispatch = useDispatch();
    const [movies, setMovies]=useState([]);
    const [query, setQuery]=useState('');

    useEffect(() => {
        moviesService.getAll().then((res)=>res.json())
            .then(data=>{
                console.log(data);
                setMovies(data.results);
            })
    }, [])

    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("Searching");
        try{
            const url=`https://api.themoviedb.org/3/search/movie?api_key=0995b0f52614f6de6fc7f60ea73e7824&query=${query}`;
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch(e){
            console.log(e);
        }
    }
    const changeHandler=(e)=>{
        setQuery(e.target.value);
    }
    return (
        <div>


            {movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}


        </div>
    )
}


export {MoviesList};