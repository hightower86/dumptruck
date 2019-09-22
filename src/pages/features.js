import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

const Features = () => {
  return (
    <Layout>
      <div>
        <h1 className="title is-1">Features</h1>
        <Link to="/">to home</Link>
      </div>
    </Layout>
  )
}

export default Features
