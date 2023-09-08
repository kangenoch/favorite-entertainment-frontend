/* eslint-disable react/no-unknown-property */
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
      <br />
      {/* Now on, comments refer bottom codes.*/}
      {/* grid starts */}
      <div class="container text-center">
        {/* starting row */}
        <div class="row">
          {/* adding empty column */}
          <div class="col">&nbsp;</div>
          {/* starting main col-8 */}
          <div class="col-8">
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
            {/* closing main col-8 */}
          </div>
          {/* adding empty column */}
          <div class="col">&nbsp;</div>
          {/* closing row */}
        </div>
        {/* grid ends */}
      </div>
    </>
  );
}
