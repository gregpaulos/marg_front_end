import React from 'react';

const SortButton = (props) => {
    const sortWord = props.sortedByDistance ? "Ratings" : "Distance"

    return (
    <div>
        <button id="sortDrinks" onClick={props.toggleSort}>Sort by {sortWord} </button>
    </div>
    )

}

export default SortButton;