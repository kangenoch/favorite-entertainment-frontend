/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import { useState } from "react";

export function FavoritesIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");
  // .filter((favorite) => favorite.user_id === props.currentUser.id)
  return (
    <>
      <div>
        <h2>Favorites Index</h2>
      </div>
      Search Filter:
      <input type="text" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} list="favorites" />
      {props.favorites
        .filter((favorite) => favorite.user_id == localStorage.getItem("user_id"))
        .map((favorite) => (
          <>
            <div>
              <li key={favorite.id}>Item_id: {favorite.item_id}</li>
              <button onClick={() => props.onShowItem(favorite)}>Show Item</button>
            </div>
            <p>&nbsp;</p>
          </>
        ))}
    </>
  );
}
