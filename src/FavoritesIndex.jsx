/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import { useState } from "react";
import { ItemShowOne } from "./ItemShowOne";
import axios from "axios";

export function FavoritesIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  const handleRemoveFromFavorite = (favorite) => {
    console.log("handleRemoveFromFavorite", favorite);

    axios.delete("http://localhost:3000/favorites/" + favorite + ".json").then((response) => {
      // setFavorites(favorites.filter((f) => f.id !== favorite.id));
      window.location.href = "/";
    });
  };

  const handleClick = (event) => {
    props.onRemoveFromFavorite(props.favorite);
  };

  return (
    <>
      {localStorage.jwt === undefined ? (
        <>{/* jwt is undefined */}</>
      ) : (
        <>
          {/* jwt is defined */}
          <div>
            <h2>Here are your favorite movies:</h2>
          </div>
          {/* Search Filter:
      <input type="text" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} list="favorites" /> */}

          {/* card started */}
          {/* card row started */}
          <div class="row row-cols-3 row-cols-md-5  g-4">
            {props.favorites
              .filter((favorite) => favorite.user_id == localStorage.getItem("user_id"))
              .map((favorite) => (
                <>
                  {/* card col started */}
                  <div class="col">
                    <div class="card text-bg-dark mb-3">
                      <ItemShowOne item_id={favorite.item_id} />
                      {/* <li key={favorite.id}>Item_id: {favorite.item_id}</li> */}
                      <button class="btn btn-primary" onClick={() => handleRemoveFromFavorite(favorite.id)}>
                        Remove From Favorite
                      </button>
                    </div>
                  </div>
                  {/* card col ended */}
                </>
              ))}
            {/* card row ended */}
          </div>
          {/* card ended */}
        </>
      )}
    </>
  );
}
