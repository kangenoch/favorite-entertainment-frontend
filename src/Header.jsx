/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";

import { Logout } from "./Logout.jsx";
import { Link } from "react-router-dom";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Favorite Entertainment App
          </a>

          {/* <Link to="/" className="navbar-brand">
            Favorite Entertainment Movies
          </Link> */}

          {localStorage.jwt === undefined ? (
            <>
              {/* jwt is undefined */}
              <div className="navbar-item">Please login or sign up!{/* <button>{<Logout />}</button> */}</div>
            </>
          ) : (
            <>
              {/* jwt is defined */}
              <div className="navbar-item">
                Hello, {localStorage.user_name}!{/* <button>{<Logout />}</button> */}
              </div>
            </>
          )}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                {localStorage.jwt === undefined ? (
                  <></>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/favorites" className="dropdown-item">
                        My Favorites
                      </Link>
                    </li>
                  </>
                )}
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul class="dropdown-menu">
                  {/* <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li> */}

                  {localStorage.jwt === undefined ? (
                    <>
                      <li className="nav-item">
                        <Link to="/signup" className="dropdown-item">
                          Signup
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="dropdown-item">
                          Login
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="dropdown-item">Hello! {localStorage.email}</li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li className="nav-item">
                        <Link to="/logout" className="dropdown-item">
                          Logout
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <p>&nbsp;</p>
    </header>
  );
}
