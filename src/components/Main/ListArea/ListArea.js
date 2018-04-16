import React from 'react';

const ListArea = (props) => {
    
    const list = props.establishments.map((establishment, i)=>{
        return (
            <li key={establishment.id} onClick={() => props.toggleModal(i)}>{establishment.name}</li>
        )
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
};

export default ListArea;