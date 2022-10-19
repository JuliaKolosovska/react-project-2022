import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "../slice/movies.slice";



const rootReducer = combineReducers({
    moviesReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}