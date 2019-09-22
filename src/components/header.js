import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <section className="hero h-hero is-light is-medium">
    <div className="hero-head ">
      <div className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item image">
            <img src="../images/logo5.png" alt="Logo" width="120" />
          </div>
        </div>
        <div className="navbar-menu">
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
