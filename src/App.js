import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesList} from "./components";



function App() {
    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                {/*<Route index element={<Navigate to={'/movies'}/>}/>*/}
                {/*<Route path={'/movies'} element={<MoviesList/>}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
