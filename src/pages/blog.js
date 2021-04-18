import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({ data }) => {

  const { allStrapiBlogs: { nodes: blogs } } = data;
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  )
}
export const query = graphql`
{
      allStrapiBlogs {
      nodes {
        slug
        content
        desc
        category
        date(formatString: "MMM Do,YYYY")
        id
        title
        image {
      childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
 
    }
          }
        }
      }
    }
}
`
export default Blog
