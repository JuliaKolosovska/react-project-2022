import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {moviesService} from "../services";
import {Movies} from "../components";
import {MainLayout} from "../layouts";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        moviesService.getAll(query.get('page')).then(({data: res}) => {
            setMovies(res.data)
            setPrev(res.prev)
            setNext(res.next)
        })
    }, [query])

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }
    return (
        <div>
            <MainLayout/>
            <Movies movies={movies} setMovies={setMovies}/>
            <hr/>
            <hr/>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {MoviesPage};