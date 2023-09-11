/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

export function ItemShowOne(props) {
  const [item, setItem] = useState([]);
  //const [currentItem, setCurrentItem] = useState({});

  const handleIndexOneItem = (id) => {
    axios.get("http://localhost:3000/items/" + id + ".json").then((response) => {
      console.log(response.data);
      setItem(response.data);
    });
  };

  useEffect(() => {
    handleIndexOneItem(props.item_id);
  }, []); // [] means only run once

  return (
    <>
      {/* <h3>Item_id: {props.item_id}</h3> */}
      {/* <button onClick={() => handleIndexOneItem(props.item_id)}>Show Item</button> */}
      {/* {() => handleIndexOneItem(props.item_id)} */}
      <div class="card text-bg-dark mb-3">
        <div class="card-title">{item.name}</div>
        <img src={item.image_url} height="200" />
        {/* <br /> */}
      </div>
    </>
  );
}
