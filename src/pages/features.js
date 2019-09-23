import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import "./features.scss"

const Features = () => {
  return (
    <Layout>
      <section className="hero f-hero is-fullheight is-dark">
        <div className="hero-body">
          <div className="columns">
            <div class="column"></div>
            <div class="column is-three-fifths i-column">
              <div className="i-container has-text-centered">
                <h1 className="title is-1 has-text-weight-bold">
                  Commercial dump truck dispatch software saves you time and
                  money!
                </h1>

                <button className="button is-medium i-button">
                  REQUEST DEMO
                </button>
              </div>
            </div>

            <div class="column"></div>
          </div>
        </div>
      </section>

      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2 has-text-centered">
              Create and manage projects and quotes
            </h2>
            <div className="columns">
              <div className="column">
                <content className="content">
                  <p>
                    Are you still using a paper based system to track orders and
                    create quotes for customers? There is an easier and more
                    productive way! Setting up a new project or getting your bid
                    in for a contract is fast and easy with Dump Truck
                    Dispatcher, a cloud based software program for dump truck
                    businesses.
                  </p>

                  <p>
                    Projects allow you to create numerous quotes associated with
                    the same project without having to enter the same data for
                    each quote you are sending to the various vendors. You can
                    readily track the quotes associated with the project.
                  </p>
                  <p>
                    Once data is entered into a quote, it can carry through to
                    the orders with minimal data entry. This streamlines the
                    process, reduces data entry, and results in fewer errors in
                    pricing.
                  </p>

                  <p>
                    You have the ability to sort and search for projects by
                    start date, customer name, and status.
                  </p>
                </content>
              </div>
              <div className="column">
                <figure>
                  <img
                    src="../images/projects-2-1024x768.jpg"
                    alt="projects"
                    width="300"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Features
