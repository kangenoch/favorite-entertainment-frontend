/* eslint-disable no-unused-vars */
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";

export function Content() {
  const [isModalShowVisible, setIsModalShowVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalShowVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalShowVisible(false);
  };

  return (
    <div>
      <Signup />
      <p>&nbsp;</p>
      <Login />
      <p>&nbsp;</p>
      <Logout />
      <p>&nbsp;</p>
      <h1>Welcome to React!</h1>
      <p>&nbsp;</p>
      <button onClick={handleShowModal}>Show Modal</button>
      <Modal show={isModalShowVisible} onClose={handleCloseModal}>
        <p>Hello</p>{" "}
      </Modal>
    </div>
  );
}
