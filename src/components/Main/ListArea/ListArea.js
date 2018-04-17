import React from "react";
import ReactStars from "react-stars";

const ListArea = props => {
  const list = props.establishments.map((establishment, i) => {
    return (
      <li key={establishment.id} onClick={() => props.toggleModal(i)}>
        {establishment.name}, {establishment.distance}, AVG RATING:
        <ReactStars count={5} size={24} color2={'#ffd700'} value={establishment.avgRating} edit={false}
        />
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
