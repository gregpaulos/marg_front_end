import React from 'react';

const ListArea = (props) => {
    
    const list = props.establishments.map((establishment)=>{
        return (
            <li>{establishment.name}</li>
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