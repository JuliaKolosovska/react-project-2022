import React, {useState} from 'react';

import {img} from "../../configs";

const Movie = ({title, poster_path, vote_average, release_date, overview}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);


    return (
        <div>
            <div>
                <img src={img + poster_path} alt ='poster'/>
                <div>
                    <button onClick={handleShow}>Details</button>
                    {/*<Modal show={show} onHide={handleClose}>*/}
                    <h3>{title}</h3>
                    <h4>IMDb: {vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <br></br>
                    <h6>Overview</h6>
                    <p>{overview}</p>

                </div>
            </div>

        </div>
    );
};

export {Movie};