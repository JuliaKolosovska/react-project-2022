import {Route, Routes} from "react-router-dom";

import {MoviesPage} from "./pages";




function App() {
    return (

        <Routes>
            <Route path={'/'} element={<MoviesPage/>}>
               <Route path={'/movies'} element={<MoviesPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
