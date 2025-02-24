import React from "react";


const Navbar = () => {
  return (
    <div className="navColor p-2">
      <nav className="navbar container navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src="https://cdn2.steamgriddb.com/logo_thumb/66862e23f05c8e1f6b559799b744a320.png" alt="Logo" width="100px"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active nav-item-custom text-light" href="#home">HOME</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  GODS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#egypt">Egypt</a></li>
                  <li><a className="dropdown-item" href="#greek">Greek</a></li>
                  <li><a className="dropdown-item" href="#roman">Roman</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active nav-item-custom text-light" href="#footer">ABOUT</a>
              </li>
            </ul>
            <form className="d-flex gap-2">
              <button className="btn btn-outline-success text-light" type="button">Register</button>
              <button className="btn btn-outline-success text-light" type="button">Log In</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;