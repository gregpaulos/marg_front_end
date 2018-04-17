import ReactStars from 'react-stars'
import React from 'react';

const Modal = (props) => {

    return (
        <div>
            <h2>{props.place.name}</h2>
            <p>{props.place.address}</p>
            <p>{props.place.phone}</p>
            <p>{props.place.description}</p>
            <ReactStars
            count={5}
            size={24}
            onChange={(newRating)=>props.rateMargs(props.place.id, newRating)}
            color2={'#ffd700'}
            />
        </div>
    );
}

export default Modal;