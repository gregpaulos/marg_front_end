import React from "react";
import ReactStars from "react-stars";
import classes from './ListArea.css';

const ListArea = props => {
  const list = props.establishments.map((establishment, i) => {
    const starRating = establishment.avgRating ? (
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        value={establishment.avgRating}
        edit={false}
      />
    ) : (
      "No Ratings Yet!"
    );

    return (
      <li key={establishment.id} onClick={() => props.toggleModal(i)} className={classes.ListItem}>
        <p className={classes.PaddingLeft}>{establishment.name}</p>
        <p className={classes.PaddingRight}>{establishment.distance}</p>
        <p>AVG RATING: </p>
        {starRating}
      </li>
    );
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default ListArea;
