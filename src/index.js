import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";
import {Provider} from "react-redux";

import App from "./App";




const store = setupStore();
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
