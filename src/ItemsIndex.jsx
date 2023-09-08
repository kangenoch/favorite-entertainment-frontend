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

      {/* Now on, comments refer bottom codes.*/}
      {/* grid starts */}
      <div class="container text-center">
        {/* starting row */}
        <div class="row">
          {/* adding empty column */}
          <div class="col">&nbsp;</div>
          {/* starting main col-8 */}
          <div class="col-8">
            {/* starting carousel */}
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              {/* starting inner carousel */}
              <div class="carousel-inner">
                Search Filter:
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  list="items"
                />
                <br />
                <div class="carousel-item active" data-bs-interval="100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbI5MAGTZYd3HcFk1AsXe78Gu2lW0lVXw4Q&usqp=CAU"
                    class="img-thumbnail"
                    alt="Movie"
                  />
                </div>
                {props.items
                  .filter((item) => item.name.toLowerCase().includes(searchFilter.toLowerCase()))
                  .map((item) => (
                    <>
                      <div class="carousel-item" data-bs-interval="2000">
                        <h3>{item.name}</h3>

                        {/* <img src={item.image_url} width="200" /> */}

                        <button class="btn btn-dark" onClick={() => props.onShowItem(item)}>
                          <img src={item.image_url} class="img-thumbnail" alt="..." />
                        </button>
                      </div>
                    </>
                  ))}
                {/* closing inner carousel */}
              </div>
              {/* starting control buttons */}
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                {/* closing control buttons */}
              </button>
              {/* closing carousel */}
            </div>
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
