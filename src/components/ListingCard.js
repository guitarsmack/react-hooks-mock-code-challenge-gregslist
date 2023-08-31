import React, { useState } from "react";

function ListingCard({ id, image, desc, location, onDelete}) {

  const [favorite,setFavorite] = useState(false)

  function favClick(){
    setFavorite(!favorite)
  }

  function deleteItem(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={desc} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={favClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{desc}</strong>
        <span> · {location}</span>
        <button onClick={deleteItem} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
