import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    
    <div className="Hero">
      
      <div className="HeroGroup">
      <h1>Hey! Hola,<br/> mi nombre es Carlos</h1>
      <p>Te invito a ver mi sitio web y que puedas ver uno de mis trabajos</p>
      <Link to="/video">"Click para conocerme mejor"</Link>
      
      </div>
      

    </div>
  </div>
)

export default IndexPage
