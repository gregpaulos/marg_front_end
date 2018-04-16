import React from 'react';

const ListArea = (props) => {
    
    const list = props.establishments.map((establishment)=>{
        return (
            <li key={establishment.id}>{establishment.name}, {establishment.distance}</li>
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