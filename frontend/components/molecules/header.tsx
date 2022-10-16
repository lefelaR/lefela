import React from "react";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        image
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Tech-Stack</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Contact</a>
                            </li>
                        </ul>
                        <div>
                            <p className="text-white">signin</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;