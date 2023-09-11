/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Modal } from "./Modal";
import { ItemsIndex } from "./ItemsIndex";
import { useState, useEffect } from "react";
import { FavoritesIndex } from "./FavoritesIndex";
import { ItemsShow } from "./ItemsShow";

export function Content() {
  const [isModalShowVisible, setIsModalShowVisible] = useState(false);

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const [favorites, setFavorites] = useState([]);
  const [currentFavorite, setCurrentFavorite] = useState({});

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleShowItem = (item) => {
    setIsModalShowVisible(true);
    setCurrentItem(item);
  };

  const handleCloseItem = () => {
    setIsModalShowVisible(false);
  };

  const handleIndexFavorites = () => {
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };
  const handleShowFavorite = (favorite) => {
    setIsModalShowVisible(true);
    setCurrentFavorite(favorite);
  };
  const handleCloseFavorite = () => {
    setIsModalShowVisible(false);
  };

  const handleAddToFavorite = (params) => {
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      setFavorites([...favorites, response.data]);
    });
  };

  useEffect(() => {
    handleIndexItems();
    handleIndexFavorites();
  }, []);

  return (
    <div class="container">
      {/* <h1>Favorite Entertainment App</h1> */}
      {/* <p>&nbsp;</p> */}
      <Signup />
      <p>&nbsp;</p>
      <Login />
      <p>&nbsp;</p>
      <Logout />
      <p>&nbsp;</p>

      {/* <button class="btn btn-primary" onClick={handleShowItem}>
        Test Modal
      </button> */}
      <Modal show={isModalShowVisible} onClose={handleCloseItem}>
        <ItemsShow item={currentItem} />
      </Modal>
      <p>&nbsp;</p>
      <FavoritesIndex favorites={favorites} onShowFavorite={handleShowFavorite} />
      <p>&nbsp;</p>
      <ItemsIndex items={items} onShowItem={handleShowItem} onAddToFavorite={handleAddToFavorite} />
    </div>
  );
}

//<p>{currentItem.name}</p>
//<p>{currentFavorite.name}</p>
