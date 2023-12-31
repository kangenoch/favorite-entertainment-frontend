/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("user_name", response.data.user_name);
        localStorage.setItem("image_url", response.data.image_url);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
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
          <div id="login">
            <h1>Login</h1>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div>
                Email: <input name="email" type="email" />
              </div>
              <div>
                Password: <input name="password" type="password" />
              </div>
              {/* <button type="submit">Login</button> */}
              <button class="btn btn-primary" type="submit">
                Login
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          {/* jwt is defined */}
          <img src={localStorage.image_url} width="100" /> <br />
          Hello, {localStorage.user_name}! <br />
          Your id is #{localStorage.user_id}.
        </>
      )}
    </>
  );
}
