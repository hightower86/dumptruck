import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import logo from "../images/logo5.png"

const Header = ({ siteTitle }) => (
  <section className="hero h-hero is-light is-medium">
    <div className="hero-head ">
      <div className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={logo} alt="Logo" width="131" height="" />
          </div>
          <div className="navbar-dropdown">
            {/* <div class="navbar-start"> */}
            {/* <a class="navbar-item" href="https://bulma.io/">
              Home
            </a> */}
            <div class="navbar-item has-dropdown is-hoverable">
              <div className="navbar-item">menu</div>
              <div class="navbar-dropdown is-boxed">
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
            {/* </div> */}
          </div>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
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
