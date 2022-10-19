import React from 'react';
import {Outlet} from "react-router-dom";

import {Header, MoviesList} from "../components";


const MoviesPage = () => {
    return (
       <div> <div>
            <Header/>
        </div>
        <div>
           <MoviesList/>
            <Outlet/>
        </div>
       </div>
    );
};

export {MoviesPage};