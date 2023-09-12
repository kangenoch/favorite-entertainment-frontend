/* eslint-disable react/no-unknown-property */
import axios from "axios";

export function Logout() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <>
      {localStorage.jwt === undefined ? (
        <>
          {/* jwt is undefined */}

          {localStorage.removeItem("email")}
          {localStorage.removeItem("user_id")}
          {localStorage.removeItem("user_name")}
          {localStorage.removeItem("image_url")}
        </>
      ) : (
        <>
          {/* jwt is defined */}
          <h2>Are you sure?</h2>
          {/* <a href="#" onClick={handleClick}>
            Logout
          </a> */}
          <button class="btn btn-primary" onClick={handleClick}>
            Logout
          </button>
          <p>&nbsp;</p>
        </>
      )}
    </>
  );
}
