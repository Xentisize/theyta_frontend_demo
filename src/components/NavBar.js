import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({ active }) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img
              src="/logo_theyta_01_colour.svg"
              className="img-responsive"
              style={{ display: "inline" }}
              alt="Theyta Logo"
              width="150"
              height="100"
            />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className={active === "about" ? "active" : null}>
                About TheyTa
              </Link>
            </li>

            <li className="dropdown">
              <a
                href="#"
                className={
                  (active === "features" ? "active" : null) + " dropdown-toggle"
                }
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Features <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <Link to="/feature/01">Creating Articles</Link>
                </li>
                <li>
                  <Link to="/feature/02">Data for Analysis</Link>
                </li>
                <li>
                  <Link to="/feature/03">Generating Graphs</Link>
                </li>
                <li>
                  <Link to="/feature/04">Share Charts</Link>
                </li>
                <li>
                  <Link to="/feature/05">Interacting with People</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#download_app" className="btn btn-default btn-xs">
                Download App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
