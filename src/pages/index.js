import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

const indexPage = () => {
  return (
    <Layout>
      <div className="has-text-centered">
        <h1 className="title is-1">
          Dump Truck Software for More Productive Operations
        </h1>
        <h3 className="subtitle is-3">
          Dump Truck Dispatcher is cloud-based software that can help organize
          and manage your quotes, orders, tickets, schedules, dispatches, and
          fleet vehicle maintenance.
        </h3>
        <Link to="/features">features</Link>
      </div>
    </Layout>
  )
}

export default indexPage
