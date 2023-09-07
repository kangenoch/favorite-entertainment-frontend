/* eslint-disable no-unused-vars */
import axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Modal } from "./Modal";
import { ItemsIndex } from "./ItemsIndex";
import { useState, useEffect } from "react";
import { FavoritesIndex } from "./FavoritesIndex";

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

  useEffect(() => {
    handleIndexItems();
    handleIndexFavorites();
  }, []);

  return (
    <div>
      <Signup />
      <p>&nbsp;</p>
      <Login />
      <p>&nbsp;</p>
      <Logout />
      <p>&nbsp;</p>
      <h1>Favorite Entertainment App</h1>
      <p>&nbsp;</p>
      <button onClick={handleShowItem}>Show Modal</button>
      <Modal show={isModalShowVisible} onClose={handleCloseItem}>
        <p>{currentItem.name}</p>
        <p>{currentFavorite.name}</p>
      </Modal>
      <p>&nbsp;</p>
      <FavoritesIndex favorites={favorites} onShowFavorite={handleShowFavorite} />
      <p>&nbsp;</p>
      <ItemsIndex items={items} onShowItem={handleShowItem} />
    </div>
  );
}
