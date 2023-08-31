import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [itemList,setItemList] = useState([])

  function handleDelete(id){
    const updateItems = itemList.filter(item => item.id !== id)
    setItemList(updateItems)
  }
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setItemList(data))
  },[])

  return (
    <main>
      <ul className="cards">
        {itemList.map(item => {
          return <ListingCard
          key={item.id}
          id={item.id}
          image={item.image}
          desc={item.description}
          location={item.location}
          onDelete={handleDelete} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
