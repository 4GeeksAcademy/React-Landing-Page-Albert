import React from "react";


const Navbar = () => {
    return (
      <div className="navColor p-2">
        <nav className="container navbar navbar-expand-lg navbar-light ps-3 pe-3">
            <div className="container-fluid ms-5">
                <a className="navbar-brand" href="#">
                  <img src="https://cdn2.steamgriddb.com/logo_thumb/66862e23f05c8e1f6b559799b744a320.png" alt="Logo" width="100px"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="linkers me-5 d-flex flex-row">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                  </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="#">Gods</a>
                </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="#">About</a>
                </li>
                </ul>
            </div>
            </div>
          </nav>
          </div>
    );
};

export default Navbar;