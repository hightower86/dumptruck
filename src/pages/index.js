import React from "react"
import Layout from "../components/layout.js"
import "./index.scss"
// import "../components/debug.css"

const indexPage = () => {
  return (
    <Layout>
      <section className="hero hero-index  is-fullheight-with-navbar is-dark">
        <div className="hero-body">
          <div className="columns">
            <div class="column"></div>
            <div class="column is-three-fifths i-column">
              <div className="i-container has-text-centered">
                <h1 className="title is-1 has-text-weight-bold">
                  Dump Truck Software for More Productive Operations
                </h1>
                <p className="subtitle is-6">
                  Dump Truck Dispatcher is cloud-based software that can help
                  organize and <br /> manage your quotes, orders, tickets,
                  schedules, dispatches, <br /> and fleet vehicle maintenance.
                </p>
                <button className="button is-medium i-button">
                  REQUEST DEMO
                </button>
              </div>
            </div>

            <div class="column"></div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">Benefits</h2>
            <div className="columns">
              <div className="column ">
                <div className="content is-medium">
                  <ul className="type-1">
                    <li>
                      <i class="fa fa-check" aria-hidden="true"></i>Improved
                      dispatcher productivity
                    </li>
                    <li>Happier dispatchers and customers</li>
                    <li>Increased truck utilization</li>
                    <li>Reduced labor expenses</li>
                    <li>
                      Reduced fleet vehicle maintenance cost and fewer unplanned
                      breakdowns
                    </li>
                    <li>Increased profitability</li>
                  </ul>
                </div>
              </div>

              <div className="column ">
                <div className="content is-medium">
                  <p>
                    Some of these benefits may sound too good to be true. Read
                    below to find out more about how Dump Truck Dispatcher can
                    improve your operations and provide these benefits.
                  </p>
                  <p>
                    Ask about our case study of a client with a large fleet.
                    They had a 28% improvement in revenue per mile and 26%
                    improvement in revenue per hour. And they haven't finished
                    implementing all of the functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default indexPage
