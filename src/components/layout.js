import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const Header = ({ siteTitle }) => (
    <Header/>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
