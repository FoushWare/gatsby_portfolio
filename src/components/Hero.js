import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath:{eq: "hero-img11.png"}){
    childImageSharp {
      fluid{
         ...GatsbyImageSharpFluid

      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm ahmed fouad</h1>
            <h4>Full Stack Web Developer | Backend Developer</h4>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" style={{ top: -49 }} />
      </div>
    </header>
  )
}

export default Hero
