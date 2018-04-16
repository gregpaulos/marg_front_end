import React from 'react';

const Modal = (props) => {

    return (
        <div>
            <h2>{props.place.name}</h2>
            <p>{props.place.address}</p>
            <p>{props.place.phone}</p>
            <p>{props.place.description}</p>
        </div>
    );
}

export default Modal;