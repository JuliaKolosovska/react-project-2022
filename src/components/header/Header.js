import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {Theme} from "../../configs/theme";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.header}>
            <div className={css.elements}>
                <form><input className={css.search} type="text" placeholder={'What areYou looking for?'} /></form>
                <button className={css.btn}onClick={() => navigate('/search')}>Search</button>
                <Theme/>
            </div>
        </div>
    );
};

export {Header};