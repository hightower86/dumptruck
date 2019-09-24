import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import logo from "../images/logo5.png"
//import burger from "../images/"

const Header = ({ siteTitle }) => {
  const onBurgerClick = e => {
    const nm = document.querySelector(".navbar-menu")
    nm.classList.toggle("is-active")
    e.target.classList.toggle("is-active")
  }
  return (
    <section className="hero h-hero is-light is-medium">
      <div className="hero-head ">
        <div className="navbar">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img src={logo} alt="Logo" width="131" height="" />
            </div>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={onBurgerClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/" activeClassName="active-nav-item">
                  Home
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/features" activeClassName="active-nav-item">
                  Features
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/pricing" activeClassName="active-nav-item">
                  Pricing
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/contactus" activeClassName="activeClassName">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
