import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    searchResult: [],
    errors: null,
    loading: false,
    theme: null
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({currentPage}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getAll(currentPage)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const search = createAsyncThunk(
    'moviesSlice/search',
    async ({title}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.searchByTitle(title)
            return data.results
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{
        changeTheme: (state, action)=>{
            state.theme = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.movies = action.payload
                state.loading = false
                state.errors = null
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
                state.errors = null
            })
            .addCase(search.fulfilled, (state, action)=>{
                state.searchResult= action.payload
                state.loading = false
                state.errors = null
            })
            .addDefaultCase((state,action)=>{
                const [pathElement] = action.type.split('/').splice(-1)
                if(pathElement === 'rejected'){
                    state.errors = action.payload
                    state.loading = false
                }else{
                    state.errors = null
                }
            })

})

const {reducer: moviesReducer, actions:{}} = moviesSlice

const moviesActions = {
    getAll,
    search
}

export {moviesReducer, moviesActions}