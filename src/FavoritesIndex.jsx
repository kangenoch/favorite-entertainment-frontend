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
      {props.favorites.map((favorite) => (
        <>
          <div>
            <li key={favorite.id}>Item_id: {favorite.item_id}</li>
          </div>
          <p>&nbsp;</p>
        </>
      ))}
    </>
  );
}