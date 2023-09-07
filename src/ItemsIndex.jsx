/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import { useState } from "react";

export function ItemsIndex(props) {
  console.log(props);

  return (
    <>
      <div>
        <h2>Movies Index</h2>
      </div>

      {props.items.map((item) => (
        <>
          <div>
            <h3>{item.name}</h3>

            <img src={item.image_url} width="200" />
            <br />
            <b>Genre: {item.category}</b>
            <br />
            {item.description}
            <br />
            {item.price}
          </div>

          <div>
            <button onClick={() => props.onShowModal(item)}>Show Item</button>
          </div>
          <p>&nbsp;</p>
        </>
      ))}
    </>
  );
}
