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
        </>
      ) : (
        <>
          {/* jwt is defined */}

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </>
      )}
    </>
  );
}
