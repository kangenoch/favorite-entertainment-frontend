/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import { useState } from "react";

export function ItemsIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <>
      <div>
        <h2>The Movie Database</h2>
      </div>
      Search Filter:
      <input type="text" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} list="items" />
      {props.items
        .filter((item) => item.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((item) => (
          <>
            <div>
              <li key={item.id}>
                <h3>{item.name}</h3>

                <img src={item.image_url} width="200" />

                <br />
                <b>Genre: {item.category}</b>
                <br />
                {item.description}
                <br />
                {item.price}
                <br />
                <button onClick={() => props.onShowItem(item)}>Show Item</button>
              </li>
            </div>
            <p>&nbsp;</p>
          </>
        ))}
    </>
  );
}
