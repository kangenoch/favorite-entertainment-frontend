/* eslint-disable no-unused-vars */
import axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Modal } from "./Modal";
import { ItemsIndex } from "./ItemsIndex";
import { useState, useEffect } from "react";

export function Content() {
  const [items, setItems] = useState([]);
  const [isModalShowVisible, setIsModalShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleShowModal = (item) => {
    setIsModalShowVisible(true);
    setCurrentItem(item);
  };

  const handleCloseModal = () => {
    setIsModalShowVisible(false);
  };

  useEffect(() => {
    handleIndexItems();
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
      <button onClick={handleShowModal}>Show Modal</button>
      <Modal show={isModalShowVisible} onClose={handleCloseModal}>
        <p>Hello</p>
      </Modal>
      <p>&nbsp;</p>

      <ItemsIndex items={items} onShowModal={handleShowModal} />
    </div>
  );
}
